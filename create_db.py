from database import Base, engine
from models import Cat

print("creating database")

Base.metadata.create_all(engine)