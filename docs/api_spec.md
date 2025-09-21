### API Specification

This document outlines the RESTful API for the AI-Powered Task Manager.

---

#### Base URL
`http://localhost:3000/api`

---

### 1. Authentication

*(To be defined. Will likely use JWTs with Supabase Auth.)*

---

### 2. Tasks

#### `GET /tasks`
- **Description**: Fetches all tasks for the authenticated user.
- **Response**: `200 OK`
  ```json
  [
    {
      "id": 1,
      "title": "Complete project proposal",
      "description": "Draft and finalize the proposal for Q4.",
      "status": "pending",
      "priority": "High",
      "due_date": "2025-10-15T23:59:59Z",
      "user_id": "user-uuid-123"
    }
  ]
  ```

#### `POST /tasks`
- **Description**: Creates a new task.
- **Request Body**:
  ```json
  {
    "title": "Set up project repository",
    "description": "Initialize git and push the initial commit."
  }
  ```
- **Response**: `201 CREATED`
  ```json
  {
    "id": 2,
    "title": "Set up project repository",
    "description": "Initialize git and push the initial commit.",
    "status": "pending",
    "priority": "Medium",
    "due_date": null,
    "user_id": "user-uuid-123"
  }
  ```

#### `PUT /tasks/:id`
- **Description**: Updates an existing task.
- **Request Body**:
  ```json
  {
    "status": "completed",
    "priority": "High"
  }
  ```
- **Response**: `200 OK`

#### `DELETE /tasks/:id`
- **Description**: Deletes a task.
- **Response**: `204 No Content`
