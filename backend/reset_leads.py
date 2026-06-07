import asyncio
import os
from sqlalchemy import update, text
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from dotenv import load_dotenv

# Load website .env
load_dotenv()

DB_USERNAME = os.getenv("db_username")
DB_PASSWORD = os.getenv("db_password")
DB_HOST = os.getenv("rds_endpoint")
DB_PORT = os.getenv("db_port")
DB_NAME = os.getenv("db_name")

DATABASE_URL = f"postgresql+asyncpg://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

async def reset_leads():
    engine = create_async_engine(DATABASE_URL)
    async_session = async_sessionmaker(engine, expire_on_commit=False)
    
    async with engine.begin() as conn:
        print(f"Connecting to {DB_NAME} on {DB_HOST}...")
        
        # Reset all leads so they can request trial again
        result = await conn.execute(text("UPDATE leads SET trial_granted = False, copilot_organization_id = NULL, copilot_user_id = NULL"))
        print(f"DONE! Reset lead status in website database.")
        
    await engine.dispose()

if __name__ == "__main__":
    asyncio.run(reset_leads())
