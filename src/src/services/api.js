const API_BASE_URL = import.meta.env.VITE_API_URL;

const authFetch = async (url, options = {}, getToken) => {
  const token = await getToken();
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });
};

export const getTasks = async (getToken) => {
  const res = await authFetch(`${API_BASE_URL}/tasks`, {}, getToken);
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
};

export const createTask = async (taskData, getToken) => {
  const res = await authFetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    body: JSON.stringify(taskData),
  }, getToken);
  if (!res.ok) throw new Error('Failed to create task');
  return res.json();
};

export const updateTask = async (id, taskData, getToken) => {
  const res = await authFetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(taskData),
  }, getToken);
  if (!res.ok) throw new Error('Failed to update task');
  return res.json();
};

export const deleteTask = async (id, getToken) => {
  const res = await authFetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  }, getToken);
  if (!res.ok) throw new Error('Failed to delete task');
};
