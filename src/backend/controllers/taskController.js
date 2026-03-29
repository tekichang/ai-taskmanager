import * as taskService from '../services/taskService.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks(req.user.id);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body, req.user.id);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
