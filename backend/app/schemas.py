from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: str
    name: str
    role: str

class UserCreate(UserBase):
    pass

class UserOut(UserBase):
    id: int

    class Config:
        orm_mode = True

class FeedbackBase(BaseModel):
    strengths: str
    improvements: str
    sentiment: str

class FeedbackCreate(FeedbackBase):
    employee_id: int
    manager_id: int

class FeedbackOut(FeedbackBase):
    id: int
    employee_id: int
    manager_id: int
    acknowledged: bool
    created_at: datetime

    class Config:
        orm_mode = True
