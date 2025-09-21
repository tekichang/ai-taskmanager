// src/frontend/components/TaskList.jsx
import React from 'react';

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet. Add one to get started!</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.title}</strong> - <span>{task.priority}</span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
