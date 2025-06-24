from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas, database

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/users/", response_model=schemas.UserOut)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db, user)

@router.post("/feedbacks/", response_model=schemas.FeedbackOut)
def submit_feedback(feedback: schemas.FeedbackCreate, db: Session = Depends(get_db)):
    return crud.create_feedback(db, feedback)

@router.get("/feedbacks/employee/{employee_id}", response_model=list[schemas.FeedbackOut])
def list_feedbacks(employee_id: int, db: Session = Depends(get_db)):
    return crud.get_feedbacks_for_employee(db, employee_id)

@router.post("/feedbacks/{feedback_id}/acknowledge")
def acknowledge(feedback_id: int, db: Session = Depends(get_db)):
    fb = crud.acknowledge_feedback(db, feedback_id)
    if not fb:
        raise HTTPException(status_code=404, detail="Feedback not found")
    return {"message": "Acknowledged"}
