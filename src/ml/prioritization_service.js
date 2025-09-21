// src/ml/prioritization_service.js

/**
 * Analyzes a task title to determine its priority.
 * This is a placeholder for a real AI/ML model call.
 *
 * @param {string} taskTitle The title of the task.
 * @returns {Promise<string>} The suggested priority ('High', 'Medium', or 'Low').
 */
export const getAIPriority = async (taskTitle) => {
  console.log(`Analyzing task: "${taskTitle}" for AI priority...`);

  // Mock AI logic:
  // In a real application, this would be an API call to a service like OpenAI,
  // or it would run a local model.
  const title = taskTitle.toLowerCase();

  if (title.includes('urgent') || title.includes('asap') || title.includes('critical')) {
    return 'High';
  }
  if (title.includes('review') || title.includes('plan') || title.includes('discuss')) {
    return 'Medium';
  }
  return 'Low';
};
