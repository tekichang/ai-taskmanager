# AI-Powered Task Manager

## 1. Overview

A full-stack web application that helps users manage tasks with AI-assisted prioritization. When a task is created, its title is analyzed by an LLM which returns a suggested priority level and category — no manual tagging needed.

---

## 2. Features

- **User Authentication** — sign up and sign in via Supabase Auth (email/password)
- **Task CRUD** — create, read, update, and delete tasks
- **AI Prioritization** — automatic priority (High/Medium/Low) and category assignment on task creation
- **Status Toggling** — mark tasks as done or pending
- **Per-user Data** — each user only sees their own tasks (enforced via Row Level Security)

---

## 3. Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite |
| Backend | Bun, Express.js |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth (JWT) |
| AI | Groq API (llama-3.1-8b-instant) |

---

## 4. AI Usage Notes

### Pattern
This project uses a **single-call LLM integration** pattern — the simplest and most common way to add AI to an application. When a task is created:

1. The task title is sent to the Groq API with a structured prompt
2. The model returns a JSON object: `{ "priority": "High", "category": "Work" }`
3. That data is stored alongside the task in Supabase

### Model
`llama-3.1-8b-instant` via Groq's free API tier. Groq was chosen over Gemini/OpenAI due to regional availability and free tier access.

### Prompt strategy
The system prompt instructs the model to return only valid JSON with no markdown or explanation. The temperature is set to `0.1` to reduce variability in outputs.

### What this is NOT
- **Not RAG** — there is no retrieval step or knowledge base
- **Not Agentic** — the AI makes a single decision and returns; it takes no further actions

### Data privacy
Task titles are sent to Groq's API for analysis. Do not store sensitive personal information in task titles.

---

## 5. Project Setup

### Prerequisites
- Node.js v18+
- Bun v1.0+
- Supabase project
- Groq API key (free at console.groq.com)

### Backend
```bash
cd src/backend
bun install
# Create .env with SUPABASE_URL, SUPABASE_KEY, GROQ_API_KEY
bun run index.js
```

### Frontend
```bash
cd src/frontend
npm install
# Create .env with VITE_SUPABASE_URL, VITE_SUPABASE_KEY, VITE_API_URL
npm run dev
```

### Database (Supabase SQL Editor)
```sql
create table tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  priority text default 'Low',
  status text default 'pending',
  category text default 'Other',
  created_at timestamptz default now()
);

alter table tasks enable row level security;

create policy "Users see own tasks"
  on tasks for all
  using (auth.uid() = user_id);
```

---

## 6. Environment Variables

### src/backend/.env
