from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

users = []

class User(BaseModel):
    name: str
    email: str
    role: str

@router.post("/signup")
def signup(user: User):
    for u in users:
        if u.email == user.email:
            raise HTTPException(status_code=400, detail="User already exists")
    users.append(user)
    return {"message": "Signup successful"}
