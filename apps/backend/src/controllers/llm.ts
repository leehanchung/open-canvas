import { Request, Response } from 'express';
import { LLMService } from '../services/llm';

export class LLMController {
  private llmService: LLMService;

  constructor() {
    this.llmService = new LLMService();
  }

  generate = async (req: Request, res: Response) => {
    try {
      const { prompt, modelName, config } = req.body;
      const result = await this.llmService.generate(prompt, modelName, config);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate response' });
    }
  };

  reflect = async (req: Request, res: Response) => {
    try {
      const { state, config } = req.body;
      const result = await this.llmService.reflect(state, config);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate reflection' });
    }
  };

  getAvailableModels = async (_req: Request, res: Response) => {
    try {
      const models = await this.llmService.getAvailableModels();
      res.json(models);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch available models' });
    }
  };
}
