from fastapi import FastAPI,status,HTTPException
from pydantic import BaseModel
from typing import Optional,List
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.automap import automap_base

app2 = FastAPI()

# automapping db to access data without models
Base = automap_base()
engine = create_engine("postgresql://postgres:F_s^MN38@localhost/cats_db", echo=True)
Base.prepare(engine, reflect=True)
Session=sessionmaker(bind=engine)
db=Session()

@app2.get('/cats',status_code=200)
def get_all_cats():
    catsresult=db.query(Base.classes.cats).all()
    return catsresult

