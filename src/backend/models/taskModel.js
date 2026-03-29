import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const findAll = async (userId) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const create = async (taskData) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert([taskData])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const update = async (id, updateData) => {
  const { data, error } = await supabase
    .from('tasks')
    .update(updateData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

export const remove = async (id) => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);
  if (error) throw new Error(error.message);
};
