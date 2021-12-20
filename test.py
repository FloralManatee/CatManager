from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Cat(BaseModel):
    cat_id:int
    cat_name:str
    cat_breed:str
    adopted:bool

@app.get("/")
async def root():
    return {"key": "Value"}

@app.put('/cats/{cat_id}')
def update_cat(*,cat_id:int,cat_name:Optional[str]="unnamed",cat_breed:Optional[str]="unknown",adopted:Optional[bool]=False,cat:Cat):
    return {'cat_name':cat.cat_name,
    'cat_breed':cat.cat_breed,
    'adopted':cat.adopted}