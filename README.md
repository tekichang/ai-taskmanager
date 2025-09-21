# AI-Powered Task Manager

## 1. Overview

This project is a full-stack web application designed to help users manage tasks with the assistance of AI. It provides smart recommendations for task prioritization and organization, aiming to improve productivity and workflow efficiency.

---

## 2. Features

### Core Features
- **User Authentication**: Secure sign-up and login.
- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Task Dashboard**: View all tasks in a clean, organized interface.
- **Filtering & Sorting**: Organize tasks by priority, due date, or status.

### AI-Powered Features
- **Smart Prioritization**: AI-driven suggestions for task priority based on content and context.
- **Task Categorization**: Automatic categorization of tasks.
- **Actionable Insights**: Recommendations for breaking down large tasks into smaller, manageable steps.

---

## 3. Tech Stack

- **Frontend**: React, Vite
- **Backend**: Bun with Express.js
- **Database**: Supabase (PostgreSQL)
- **AI/ML**: Placeholder for integration with a custom model or a third-party API.
- **Testing**: Jest, React Testing Library

---

## 4. Project Setup & Installation

### Prerequisites
- Node.js (v18+)
- Bun (v1.0+)
- A Supabase account and project credentials.

### Backend Setup
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/ai-task-manager.git
    cd ai-task-manager
    ```
2.  **Navigate to the backend directory**:
    ```bash
    cd src/backend
    ```
3.  **Install dependencies**:
    ```bash
    bun install
    ```
4.  **Set up environment variables**:
    Create a `.env` file in the `src/backend` directory and add your Supabase credentials:
    ```env
    SUPABASE_URL=your_supabase_project_url
    SUPABASE_KEY=your_supabase_anon_key
    ```
5.  **Run the server**:
    ```bash
    bun dev
    ```
    The backend server will be running at `http://localhost:3000`.

### Frontend Setup
1.  **Navigate to the frontend directory**:
    ```bash
    # From the root directory
    cd src/frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The React app will be available at `http://localhost:5173`.

---

## 5. AI Usage Notes

*(Placeholder Section)*

This section will detail how AI is leveraged within the application. It will cover:
- The models or APIs being used.
- The specific prompts or inputs provided to the AI.
- The workflow for generating insights and how they are integrated back into the user experience.
- Notes on ethical considerations and data privacy.
