#!/bin/bash
set -eo pipefail

# Step 0: starting the script


APP_DIR="/home/ubuntu/home/renewal360_website"
BRANCH="main"
LOGFILE="/tmp/renewal360-deploy.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

log()   { echo "[$TIMESTAMP] $1" | tee -a "$LOGFILE"; }
error() { echo "[$TIMESTAMP] ERROR: $1" | tee -a "$LOGFILE" >&2; exit 1; }

log "========================================="
log "Starting deployment"

# Step 1: Go to app dir
cd "$APP_DIR" || error "Cannot cd to $APP_DIR"

# Step 2: Git pull (hard reset to avoid conflicts)
log "Pulling latest from $BRANCH..."
git fetch origin
git checkout "$BRANCH"
git reset --hard origin/"$BRANCH" || error "Git pull failed"
log "Git pull successful"

# Step 3: Fix PNG case sensitivity (Linux issue)
log "Fixing PNG filename case..."
find src/assets -name "*.PNG" | while read f; do
  mv "$f" "${f%.PNG}.png" && log "Renamed: $f"
done

# Step 4: npm install only if package.json changed
if git diff HEAD@{1} --name-only 2>/dev/null | grep -q "package.json"; then
  log "package.json changed, running npm install..."
  npm install --legacy-peer-deps || error "npm install failed"
else
  log "package.json unchanged, skipping npm install"
fi

# Step 5: Build
log "Building..."
npm run build || error "Build FAILED - check $LOGFILE"
log "Build successful"

# Step 6: Nginx reload
log "Syncing nginx config..."
sudo cp "$APP_DIR/services/nginx/renewal360.in.conf" /etc/nginx/sites-available/renewal360.in
sudo ln -sf /etc/nginx/sites-available/renewal360.in /etc/nginx/sites-enabled/renewal360.in
sudo nginx -t && sudo nginx -s reload || error "Nginx reload failed"
log "Nginx reloaded"

log "========================================="
log "Deployment successful! ✅"
log "========================================="