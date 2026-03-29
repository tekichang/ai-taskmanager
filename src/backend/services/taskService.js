import * as taskModel from '../models/taskModel.js';
import { getAIPriority } from '../../ml/prioritization_service.js';

export const getAllTasks = async (userId) => {
  return await taskModel.findAll(userId);
};

export const createTask = async (taskData, userId) => {
  const aiPriority = await getAIPriority(taskData.title);
  const newTaskData = {
    ...taskData,
    priority: taskData.priority || aiPriority,
    status: 'pending',
    user_id: userId,
  };
  return await taskModel.create(newTaskData);
};

export const updateTask = async (id, updateData) => {
  return await taskModel.update(id, updateData);
};

export const deleteTask = async (id) => {
  return await taskModel.remove(id);
};
