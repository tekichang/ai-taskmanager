# 📌 AI-Powered Task Manager

## 🔖 Project Title & Description
**AI-Powered Task Manager**  
A lightweight web app that helps users create, categorize, and track tasks efficiently.

- **Who it’s for:** Students, freelancers, and professionals who want a simple but smart task manager.  
- **Why it matters:** Many task apps exist, but few integrate **AI assistance** for prioritization and description generation. This project makes productivity easier by blending a clean UI with AI-powered guidance.

---

## 🛠️ Tech Stack
- **Languages:** TypeScript, SQL  
- **Frontend:** React + TailwindCSS  
- **Backend:** Bun + Express  
- **Database:** Supabase (Postgres + Auth)  
- **Deployment:** Vercel (frontend) + Supabase (backend/db)  
- **Version Control:** Git + GitHub (SSH)

---

## 🧠 AI Integration Strategy

### 🧱 Code Generation
- Use AI to scaffold React components (e.g., `TaskCard`, `TaskList`, `AddTaskModal`).  
- Generate backend CRUD route handlers and database access functions.  
- AI-powered schema-aware queries with Supabase MCP.

### 🧪 Testing
- Generate Jest test suites for frontend components (rendering, props, form validation).  
- Suggest integration tests for task creation → DB write → retrieval.  
- Example prompt:  

### 📖 Documentation
- AI-assisted **docstrings** in TypeScript functions and backend routes.  
- Inline code comments written/refined with AI for clarity.  
- README updates drafted with AI prompts (summarizing features, installation steps, usage).

### 📡 Context-Aware Techniques
- Provide AI with **Supabase schema** to generate accurate queries.  
- Feed **API specs** or **file trees** into AI workflows when scaffolding new features.  
- Use **diffs in commits** so AI can generate meaningful commit messages and PR summaries.

---