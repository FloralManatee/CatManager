from database import Base
from sqlalchemy import String, Boolean, Integer, Column

class Cat(Base):
    __tablename__='cats'
    cat_id=Column(Integer,primary_key=True,unique=True)
    cat_name=Column(String(50),nullable=False)
    cat_breed=Column(String(50),nullable=False)
    adopted=Column(Boolean,default=False)

    def __repr__(self):
        return f'{self.cat_breed} cat called {self.cat_name}. Adopted? {self.adopted}'
