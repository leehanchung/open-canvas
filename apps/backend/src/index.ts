import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { llmRouter } from './routes/llm';

config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/llm', llmRouter);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
