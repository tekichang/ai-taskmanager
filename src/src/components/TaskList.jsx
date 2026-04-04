const priorityColor = { High: '#ef4444', Medium: '#f59e0b', Low: '#22c55e' };

const TaskList = ({ tasks, onDelete, onToggle }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="muted">No tasks yet. Add one above!</p>;
  }
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.status === 'done' ? 'done' : ''}`}>
          <div className="task-main">
            <input type="checkbox" checked={task.status === 'done'}
              onChange={() => onToggle(task)} />
            <div className="task-info">
              <span className="task-title">{task.title}</span>
              <div className="task-meta">
                <span className="badge" style={{ background: priorityColor[task.priority] }}>
                  {task.priority}
                </span>
                <span className="category">{task.category}</span>
              </div>
            </div>
          </div>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
