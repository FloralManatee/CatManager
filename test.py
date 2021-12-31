from fastapi import FastAPI,status,HTTPException
from pydantic import BaseModel
from typing import Optional,List
from database import SessionLocal
import models

app = FastAPI()

class Cat(BaseModel):
    cat_id:int
    cat_name:str
    cat_breed:str
    adopted:bool

    class Config:
        orm_mode=True

class CatUpdateRequest(BaseModel):
    cat_id:Optional[int]
    cat_name:Optional[str]
    cat_breed:Optional[str]
    adopted:Optional[bool]

db=SessionLocal()

@app.get("/")
async def root():
    return {"key": "Value"}

@app.get('/cats',response_model=List[Cat],status_code=200,tags=["Read"])
async def Read_all_cats():
    cats=db.query(models.Cat).all()
    return cats

@app.get('/cats/{cat_id}',response_model=Cat,status_code=status.HTTP_200_OK,tags=["Read"])
async def Read_cat_by_id(cat_id:int):
    cat=db.query(models.Cat).filter(models.Cat.cat_id==cat_id).first()
    return cat

@app.post('/cats',response_model=Cat,status_code=status.HTTP_201_CREATED,tags=["Create"])
async def create_cat(cat:Cat):
    db_cat=db.query(models.Cat).filter(models.Cat.cat_id==cat.cat_id).first()
    if db_cat is not None:
        raise HTTPException(status_code=400,detail="Cat already exists")
    else:
        new_cat=models.Cat(
            cat_id=cat.cat_id,
            cat_name=cat.cat_name,
            cat_breed=cat.cat_breed,
            adopted=cat.adopted
        )
        db.add(new_cat)
        db.commit()
        return new_cat

@app.put('/cats/{cat_id}',response_model=Cat,status_code=status.HTTP_200_OK, tags=["Update"])
async def update_cat_by_id(cat_id:int,cat_update:CatUpdateRequest):
    cat_to_update=db.query(models.Cat).filter(models.Cat.cat_id==cat_id).first()
    if cat_to_update is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Cat not found")
    else:
        if cat_update.cat_name is not None:
            cat_to_update.cat_name=cat_update.cat_name
        if cat_update.cat_breed is not None:
            cat_to_update.cat_breed=cat_update.cat_breed
        if cat_update.adopted is not None:
            cat_to_update.adopted=cat_update.adopted
        db.commit()
        return cat_to_update

@app.delete('/cats/{cat_id}',tags=["Delete"])
async def delete_cat_by_id(cat_id:int):
    cat_to_delete=db.query(models.Cat).filter(models.Cat.cat_id==cat_id).first()
    if cat_to_delete is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Cat not found")
    else:
        db.delete(cat_to_delete)
        db.commit()
        return cat_to_delete
