"""
Renewal360 Website Backend
Serves the admin portal HTML (frontend only).
All API logic now in renewal_copilot backend.
"""
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
import logging

# --- Logging Setup ---
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("website.log"),
        logging.StreamHandler()
    ]
)

# --- FastAPI Application ---
app = FastAPI(title="Renewal360 Website", version="3.0.0")

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

templates = Jinja2Templates(directory="templates")


# --- Routes ---

@app.get("/admin", response_class=HTMLResponse)
async def serve_admin_portal(request: Request):
    """
    Serve the admin portal HTML.
    The admin portal is a pure client-side app that calls Copilot APIs.
    """
    logging.info("Serving admin portal")
    return templates.TemplateResponse("admin.html", {"request": request})


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "service": "renewal360_website"}