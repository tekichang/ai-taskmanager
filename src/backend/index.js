import "dotenv/config";
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => res.send('AI Task Manager API is running!'));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
