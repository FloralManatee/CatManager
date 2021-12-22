from database import Base, engine
from models import Cat

Base.metadata.create_all(engine)