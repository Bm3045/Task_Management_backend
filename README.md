# 🛠 Task Tracker Backend

This repository contains the **backend implementation** of the **Task Tracker Application**, built using **Node.js**, **Express.js**, and **MongoDB**.  
It provides RESTful APIs for managing tasks with full **CRUD functionality** and follows a clean **MVC architecture**.

---

## 📌 Features

- Create a new task  
- Fetch all tasks  
- Update task status (Pending / Completed)  
- Delete a task  
- Input validation and error handling  
- MongoDB schema with timestamps  
- CORS enabled for frontend integration  

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js (v4 – stable)**
- **MongoDB**
- **Mongoose**
- **dotenv**
- **cors**

---


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string



🚀 Installation & Setup (Local)
1️⃣ Clone the Repository
git clone https://github.com/USERNAME/task-tracker-backend.git
cd task-tracker-backend

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm run dev


Server will run on:

http://localhost:5000

🔗 API Endpoints
➕ Create Task
POST /api/tasks


Request Body

{
  "title": "Learn MERN",
  "description": "Backend development",
  "priority": "High",
  "dueDate": "2026-02-15",
  "status": "Pending"
}

📥 Get All Tasks
GET /api/tasks

🔄 Update Task Status
PUT /api/tasks/:id


Request Body

{
  "status": "Completed"
}

❌ Delete Task
DELETE /api/tasks/:id

🧠 Task Model (Schema)
{
  title: String (required),
  description: String,
  priority: Low | Medium | High,
  dueDate: Date (required),
  status: Pending | Completed,
  createdAt: Date,
  updatedAt: Date
}

🌐 Deployment

The backend is deployed using Render.
live link :https://task-management-backend-2-j2ry.onrender.com
