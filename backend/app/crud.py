from sqlalchemy.orm import Session
from app import models, schemas

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_feedback(db: Session, feedback: schemas.FeedbackCreate):
    db_feedback = models.Feedback(**feedback.dict())
    db.add(db_feedback)
    db.commit()
    db.refresh(db_feedback)
    return db_feedback

def get_feedbacks_for_employee(db: Session, employee_id: int):
    return db.query(models.Feedback).filter(models.Feedback.employee_id == employee_id).all()

def acknowledge_feedback(db: Session, feedback_id: int):
    feedback = db.query(models.Feedback).filter(models.Feedback.id == feedback_id).first()
    if feedback:
        feedback.acknowledged = True
        db.commit()
        db.refresh(feedback)
    return feedback
