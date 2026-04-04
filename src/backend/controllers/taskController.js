import * as taskService from '../services/taskService.js';

const getToken = (req) => req.headers.authorization.split(' ')[1];

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks(req.user.id, getToken(req));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body, req.user.id, getToken(req));
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body, getToken(req));
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id, getToken(req));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
