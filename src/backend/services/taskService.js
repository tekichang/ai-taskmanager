// src/backend/services/taskService.js
import * as taskModel from '../models/taskModel.js';
import { getAIPriority } from '../../ml/prioritization_service.js';

// Service to get all tasks for a user
export const getAllTasks = async (userId) => {
  // Business logic would go here
  return await taskModel.findAll(userId);
};

// Service to create a new task
export const createTask = async (taskData) => {
  // 1. Get AI-powered priority suggestion
  const aiPriority = await getAIPriority(taskData.title);

  // 2. Combine user input with AI suggestion
  const newTaskData = {
    ...taskData,
    priority: taskData.priority || aiPriority, // Use user priority if provided, else use AI's
    status: 'pending',
    user_id: 'user-uuid-123', // Placeholder for authenticated user
  };

  // 3. Save to database
  return await taskModel.create(newTaskData);
};

// Service to update a task
export const updateTask = async (id, updateData) => {
  return await taskModel.update(id, updateData);
};

// Service to delete a task
export const deleteTask = async (id) => {
  return await taskModel.remove(id);
};
