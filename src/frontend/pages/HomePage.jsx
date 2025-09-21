// src/frontend/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getTasks } from '../services/api';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError('Failed to fetch tasks.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>My Tasks</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;
