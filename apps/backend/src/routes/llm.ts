import { Router } from 'express';
import { LLMController } from '../controllers/llm';

const router = Router();
const llmController = new LLMController();

router.post('/generate', llmController.generate);
router.post('/reflect', llmController.reflect);
router.get('/models', llmController.getAvailableModels);

export const llmRouter = router;
