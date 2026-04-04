import { createClient } from '@supabase/supabase-js';

const getClient = (token) => createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  { global: { headers: { Authorization: `Bearer ${token}` } } }
);

export const findAll = async (userId, token) => {
  const { data, error } = await getClient(token)
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const create = async (taskData, token) => {
  const { data, error } = await getClient(token)
    .from('tasks')
    .insert([taskData])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const update = async (id, updateData, token) => {
  const { data, error } = await getClient(token)
    .from('tasks')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const remove = async (id, token) => {
  const { error } = await getClient(token)
    .from('tasks')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
};
