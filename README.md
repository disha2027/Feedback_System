# Feedback_System

A full-stack internal feedback sharing tool to enable structured, ongoing communication between managers and employees. This system is role-based, secure, and built with a clean and user-friendly interface.

---

## Features

- 🔒 *Authentication & Roles*:
  - Sign in and sign up as either Manager or Employee
  - Employees can only see their own feedback
  - Managers can only see their own team

- ✍ *Feedback Submission & History*:
  - Managers submit structured feedback (strengths, improvements, sentiment)
  - Feedback history visible to both manager and employee
  - Managers can edit feedback
  - Employees can acknowledge feedback

- 📊 *Dashboards*:
  - *Employee Dashboard*: timeline of feedback, weekly summary, sentiment chart, notification for unread feedback
  - *Manager Dashboard*: list of team members, feedback stats, sentiment trend

---

## Tech Stack

- *Frontend*: React (Vite)
- *Backend*: FastAPI (Python)
- *Database*: SQLite
- *Styling*: CSS
- *Containerization*: Docker (backend & frontend)

---

## Backend Setup

# 1. Navigate to backend
cd backend

# 2. (Optional) Create and activate virtual environment
python -m venv venv
venv\Scripts\activate  # on Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run server
uvicorn app.main:app --reload


The backend runs at http://127.0.0.1:8000

---

## requirements.txt


fastapi
uvicorn
sqlalchemy
pydantic
python-multipart


---

## Backend Dockerfile

Dockerfile
FROM python:3.9

WORKDIR /app


RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]


### Docker Commands for Backend

cd backend
docker build -t feedback-backend .
docker run -d -p 8000:8000 feedback-backend


---

## Frontend Setup


# 1. Navigate to frontend
cd frontend

# 2. Install dependencies
npm install

# 3. Start the frontend
npm run dev


Frontend runs at http://localhost:5173

---

## Frontend Dependencies (from package.json)

json
"dependencies": {
  "axios": "^1.3.5",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.10.0"
}


---

## Frontend Dockerfile (Optional)

Dockerfile
FROM node:18

WORKDIR /app


RUN npm install

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]


> Or optionally deploy frontend via [Vercel](https://vercel.com/), Netlify, or any static hosting platform.

---

