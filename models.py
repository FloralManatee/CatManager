from database import Base
from sqlalchemy import String, Boolean, Integer, Column

class Cat(Base):
    __tablename__="cats"
    cat_id=Column(Integer,primary_key=True)
    cat_name=Column(String(50))
    cat_breed=Column(String(50))
    adopted=Column(Boolean,default=False)

    def __repr__(self):
        return f"{self.cat_breed} cat called {self.cat_name}. Adopted? {self.adopted}"
