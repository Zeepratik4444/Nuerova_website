from pydantic import BaseModel,Field
from typing import Any, Dict, List, Optional,Literal
from datetime import date
from sqlalchemy import create_engine, Column, Integer, String, MetaData,text, inspect
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
from sqlalchemy.dialects import postgresql
import pandas as pd
import os
from dotenv import load_dotenv
load_dotenv()

db_engine="postgresql+asyncpg"
db_username = os.getenv("db_username")
db_password = os.getenv("db_password")
host = os.getenv("rds_endpoint")
db_port = os.getenv("db_port")
db_name = os.getenv("db_name")
db_url = f"{db_engine}://{db_username}:{db_password}@{host}:{db_port}/{db_name}"


if all([db_username, db_password, host, db_port, db_name]):
    SQLALCHEMY_DATABASE_URL = f"postgresql://{db_username}:{db_password}@{host}:{db_port}/{db_name}"
    engine = create_engine(SQLALCHEMY_DATABASE_URL)


def query_database_x(query: str):
    """
    Execute a custom SQL query on the database.
    """
    try:
        with engine.connect() as connection:
            connection.execute(text(query))
            print(f"Succes on query : '{query}'")
            return "Success"
    except Exception as e:
        print(f"An error occurred while executing query: {e}")


def fetch_table_records(table_name: str, limit: int = 10):
    """
    Connects to the database and fetches records from a specified table.
    """
    try:
        query = text(f"SELECT * FROM {table_name} LIMIT :limit")
        with engine.connect() as connection:
            result = connection.execute(query, {"limit": limit})
            return result.mappings().all()  
    except Exception as e:
        print(f"❌ An error occurred while fetching records from '{table_name}': {e}")
        return []


import logging
# Configure logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)
import asyncio


def database_info():
    """
    Generates info for all tables inside the database, including their descriptions.
    """
    query = """
        SELECT
            t.table_schema,
            t.table_name,
            d.description AS table_description
        FROM
            information_schema.tables t
        LEFT JOIN
            pg_class c ON c.relname = t.table_name AND c.relkind = 'r'
        LEFT JOIN
            pg_description d ON d.objoid = c.oid AND d.objsubid = 0
        WHERE
            t.table_schema NOT IN ('pg_catalog', 'information_schema')
            AND t.table_type = 'BASE TABLE'
        ORDER BY
            t.table_schema, t.table_name;
    """
    try:
        with engine.connect() as connection:
            result = connection.execute(text(query))
            answer = result.mappings().all()
            print(answer)
            return answer
    except Exception as e:
        logger.exception("An error occurred while executing database_info and fetching descriptions.")
        return []

def fetch_table_properties(table_name: str):
    """
    Connects to the database and fetches properties (columns) of a specified table.
    """
    try:
        inspector = inspect(engine)
        columns = inspector.get_columns(table_name)
        table_properties = []
        for column in columns:
            table_properties.append({
                'name': column['name'],
                'type': str(column['type']),
                'nullable': column['nullable'],
                'primary_key': column.get('primary_key', False) 
            })
        print(f"✅ Fetched properties for table '{table_name}' successfully.")
        return table_properties
    except Exception as e:
        print(f"❌ An error occurred while fetching properties for table '{table_name}': {e}")
        return []


if __name__=="__main__":
    query="table"
    # query_database_x("ALTER TABLE leads ADD COLUMN trial_duration_days INTEGER;")
    # info=database_info()
    # print(info)
    info=fetch_table_properties("leads")
    for i in info:
        if i["primary_key"]:
            print(f"Name : {i['name']} || Type : {i['type']} || Primary = True")
        else:
            print(f"Name : {i['name']} || Type : {i['type']}")
    info=fetch_table_properties("users")
    for i in info:
        if i["primary_key"]:
            print(f"Name : {i['name']} || Type : {i['type']} || Primary = True")
        else:
            print(f"Name : {i['name']} || Type : {i['type']}")
