#!/bin/bash
set -e

# ─── CONFIG ───────────────────────────────────────────────
REPO_DIR="$HOME/home/Nuerova_website"
GH_USER="Zeepratik4444"
BRANCH="main"
SERVICE="nuerova-website"
APP_PORT=3000
DOMAIN="nuerova.xyz"
# ──────────────────────────────────────────────────────────

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 NUEROVA WEBSITE — DEPLOY"
echo "  $(date '+%d %b %Y %H:%M:%S IST')"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Validate GH_TOKEN
if [ -z "$GH_TOKEN" ]; then
    echo "❌ GH_TOKEN is not set. Run 'export GH_TOKEN=xxx' before running this script."
    exit 1
fi

# 1.5 Install system dependencies
echo "⚙️  Updating system packages and installing dependencies..."
sudo apt update -y
sudo apt install -y nginx git curl certbot python3-certbot-nginx

# 1.6 Install Node.js
if ! command -v node &>/dev/null; then
    echo "⚙️  Node.js not found — installing via NodeSource (LTS)..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt install -y nodejs
fi
echo "✅ Node.js $(node --version) installed"

# 2. Set authenticated remote
cd "$REPO_DIR"
git remote set-url origin "https://${GH_USER}:${GH_TOKEN}@github.com/${GH_USER}/Nuerova_website.git"
echo "✅ Remote URL set"

# 3. Stash any tracked changes
STASHED=0
if ! git diff --quiet; then
    git stash -q 2>/dev/null
    STASHED=1
    echo "✅ Local changes stashed"
fi
git pull origin "$BRANCH"
echo "✅ Pulled latest from $BRANCH"

if [ "$STASHED" -eq 1 ]; then
    git stash pop -q 2>/dev/null && echo "✅ Stash restored" || echo "⚠️  Stash pop had conflicts"
fi

# 4. Install dependencies and build
echo "📦 Installing npm dependencies..."
npm install
echo "🏗️  Building static site..."
npm run build
echo "✅ Site built successfully"

# 5. Ensure systemd service file is installed
SERVICE_FILE="/etc/systemd/system/${SERVICE}.service"
SOURCE_SERVICE="$REPO_DIR/scripts/${SERVICE}.service"
if [ ! -f "$SOURCE_SERVICE" ]; then
    echo "❌ Source service file $SOURCE_SERVICE not found. Cannot deploy."
    exit 1
fi
sudo cp "$SOURCE_SERVICE" "$SERVICE_FILE"
sudo systemctl daemon-reload
sudo systemctl enable "$SERVICE"
echo "✅ Systemd service file updated and enabled"

# 6. Write Nginx configuration
NGINX_FILE="/etc/nginx/sites-available/nuerova-website"
SSL_CERT="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem"
SSL_KEY="/etc/letsencrypt/live/${DOMAIN}/privkey.pem"

echo "⚙️  Writing Nginx configuration to $NGINX_FILE ..."

if sudo test -f "$SSL_CERT" && sudo test -f "$SSL_KEY"; then
    echo "✅ SSL certs found"
else
    echo "⚠️  SSL certs not found — obtaining via Let's Encrypt..."

    # Write a temporary HTTP-only config so certbot can complete its HTTP-01 challenge
    sudo tee "$NGINX_FILE" > /dev/null << EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
    sudo ln -sf "$NGINX_FILE" /etc/nginx/sites-enabled/nuerova-website
    if [ -f /etc/nginx/sites-enabled/default ]; then
        sudo rm /etc/nginx/sites-enabled/default
    fi
    sudo nginx -t && sudo systemctl reload nginx

    # Start the app now so certbot's HTTP-01 challenge can reach the server
    sudo systemctl restart "$SERVICE" || true

    sudo certbot certonly --nginx \
        -d "${DOMAIN}" -d "www.${DOMAIN}" \
        --non-interactive --agree-tos \
        -m "admin@${DOMAIN}" \
        --redirect

    if sudo test -f "$SSL_CERT" && sudo test -f "$SSL_KEY"; then
        echo "✅ Certificate issued successfully"
    else
        echo "❌ Certbot failed — check DNS records for ${DOMAIN} point to this server, then re-run deploy.sh"
        exit 1
    fi
fi

sudo tee "$NGINX_FILE" > /dev/null << EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name ${DOMAIN} www.${DOMAIN};

    ssl_certificate     ${SSL_CERT};
    ssl_certificate_key ${SSL_KEY};
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF
echo "✅ Nginx configured with HTTPS"

# Enable the site
sudo ln -sf "$NGINX_FILE" /etc/nginx/sites-enabled/nuerova-website
if [ -f /etc/nginx/sites-enabled/default ]; then
    sudo rm /etc/nginx/sites-enabled/default
fi

if sudo nginx -t; then
    sudo systemctl reload nginx
    echo "✅ Nginx reloaded"
else
    echo "❌ Nginx config invalid"
    exit 1
fi

sudo systemctl restart "$SERVICE"
echo "✅ Service restarted"

sleep 3
STATUS=$(sudo systemctl is-active "$SERVICE")
if [ "$STATUS" = "active" ]; then
    echo "✅ $SERVICE is RUNNING"
else
    echo "❌ $SERVICE failed to start — check logs below"
fi

echo ""
echo "━━━━ LOGS ━━━━"
sudo journalctl -u "$SERVICE" -n 20 --no-pager
echo ""
echo "✅ Deploy complete."
