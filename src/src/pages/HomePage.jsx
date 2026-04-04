import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getTasks, createTask, deleteTask, updateTask } from '../services/api';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { getToken, signOut, user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [aiHint, setAiHint] = useState('');

  const fetchTasks = async () => {
    try {
      const data = await getTasks(getToken);
      setTasks(data);
    } catch (err) {
      setError('Failed to fetch tasks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitting(true);
    setAiHint('AI is analyzing your task...');
    try {
      const task = await createTask({ title }, getToken);
      setTasks(prev => [task, ...prev]);
      setAiHint(`AI set priority: ${task.priority} · Category: ${task.category}`);
      setTitle('');
    } catch (err) {
      setError('Failed to create task.');
      setAiHint('');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id, getToken);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (err) {
      setError('Failed to delete task.');
    }
  };

  const handleStatusToggle = async (task) => {
    const newStatus = task.status === 'done' ? 'pending' : 'done';
    try {
      const updated = await updateTask(task.id, { status: newStatus }, getToken);
      setTasks(prev => prev.map(t => t.id === task.id ? updated : t));
    } catch (err) {
      setError('Failed to update task.');
    }
  };

  return (
    <div className="home">
      <div className="home-header">
        <span className="user-email">{user?.email}</span>
        <button className="sign-out" onClick={signOut}>Sign out</button>
      </div>
      <form className="task-form" onSubmit={handleCreate}>
        <input type="text" placeholder="Add a new task... AI will prioritize it"
          value={title} onChange={e => { setTitle(e.target.value); setAiHint(''); }}
          disabled={submitting} />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add task'}
        </button>
      </form>
      {aiHint && <p className="ai-hint">{aiHint}</p>}
      {error && <p className="error">{error}</p>}
      {loading
        ? <p className="muted">Loading tasks...</p>
        : <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleStatusToggle} />}
    </div>
  );
};

export default HomePage;
