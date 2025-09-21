// src/backend/models/taskModel.js
// This file will handle database interactions with Supabase.

// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// Mock database interactions for now
let tasks = [];
let currentId = 1;

export const findAll = async (userId) => {
  // In a real implementation, you would query Supabase:
  // const { data, error } = await supabase.from('tasks').select('*').eq('user_id', userId);
  // if (error) throw new Error(error.message);
  // return data;
  return tasks.filter(t => t.user_id === userId);
};

export const create = async (taskData) => {
  const newTask = { id: currentId++, ...taskData };
  tasks.push(newTask);
  return newTask;
};

export const update = async (id, updateData) => {
  const taskIndex = tasks.findIndex(t => t.id == id);
  if (taskIndex === -1) return null;
  tasks[taskIndex] = { ...tasks[taskIndex], ...updateData };
  return tasks[taskIndex];
};

export const remove = async (id) => {
  tasks = tasks.filter(t => t.id != id);
  return;
};
