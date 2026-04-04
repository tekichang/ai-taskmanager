import * as taskModel from '../models/taskModel.js';
import { getAIPriority } from '../../ml/prioritization_service.js';

export const getAllTasks = async (userId, token) => {
  return await taskModel.findAll(userId, token);
};

export const createTask = async (taskData, userId, token) => {
  const aiResult = await getAIPriority(taskData.title);
  const newTaskData = {
    ...taskData,
    priority: taskData.priority || aiResult.priority,
    category: taskData.category || aiResult.category,
    status: 'pending',
    user_id: userId,
  };
  return await taskModel.create(newTaskData, token);
};

export const updateTask = async (id, updateData, token) => {
  return await taskModel.update(id, updateData, token);
};

export const deleteTask = async (id, token) => {
  return await taskModel.remove(id, token);
};
