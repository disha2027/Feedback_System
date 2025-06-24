from sqlalchemy import Column, Integer, String, Text, Enum, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship, declarative_base
import enum
from datetime import datetime

Base = declarative_base()

class RoleEnum(str, enum.Enum):
    manager = "manager"
    employee = "employee"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    role = Column(Enum(RoleEnum))

    feedbacks_received = relationship("Feedback", back_populates="employee", foreign_keys='Feedback.employee_id')
    feedbacks_given = relationship("Feedback", back_populates="manager", foreign_keys='Feedback.manager_id')

class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("users.id"))
    manager_id = Column(Integer, ForeignKey("users.id"))
    strengths = Column(Text)
    improvements = Column(Text)
    sentiment = Column(String)
    acknowledged = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    employee = relationship("User", foreign_keys=[employee_id], back_populates="feedbacks_received")
    manager = relationship("User", foreign_keys=[manager_id], back_populates="feedbacks_given")
