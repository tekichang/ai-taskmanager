export const getAIPriority = async (taskTitle) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('GROQ_API_KEY is not set');

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: 'You are a task prioritization assistant. Respond with ONLY a valid JSON object, no markdown, no explanation.'
        },
        {
          role: 'user',
          content: `Given this task title, return ONLY this JSON format:
{"priority":"High","category":"Work"}

Priority must be one of: High, Medium, Low.
Category must be one of: Work, Personal, Health, Learning, Finance, Other.

Task title: "${taskTitle}"`
        }
      ],
      temperature: 0.1
    })
  });

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error('Empty response from Groq: ' + JSON.stringify(data));

  const cleaned = text.replace(/```json|```/g, '').trim();
  const parsed = JSON.parse(cleaned);
  return { priority: parsed.priority, category: parsed.category };
};
