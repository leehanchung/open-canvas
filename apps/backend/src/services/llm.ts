import {
  ChatAnthropic,
  ChatFireworks,
  ChatGoogleGenerativeAI,
  ChatOpenAI,
} from '@langchain/community/chat_models';
import { LangGraphRunnableConfig } from '@langchain/langgraph-sdk';

export class LLMService {
  private models: Record<string, any> = {};

  constructor() {
    // Initialize models based on environment configuration
    if (process.env.OPENAI_API_KEY) {
      this.models['gpt-4'] = new ChatOpenAI({ modelName: 'gpt-4' });
    }
    if (process.env.ANTHROPIC_API_KEY) {
      this.models['claude-3'] = new ChatAnthropic({ modelName: 'claude-3-haiku-20240307' });
    }
    // Add other model initializations as needed
  }

  async generate(prompt: string, modelName: string, config: any) {
    const model = this.models[modelName];
    if (!model) {
      throw new Error(`Model ${modelName} not found`);
    }

    return await model.invoke([
      {
        role: 'user',
        content: prompt,
      },
    ]);
  }

  async reflect(state: any, config: LangGraphRunnableConfig) {
    // Implement reflection logic
    // This would be moved from src/agent/reflection/index.ts
    return {};
  }

  async getAvailableModels() {
    return Object.keys(this.models).map(name => ({
      name,
      provider: this.getProviderFromModelName(name),
    }));
  }

  private getProviderFromModelName(modelName: string): string {
    if (modelName.includes('gpt')) return 'openai';
    if (modelName.includes('claude')) return 'anthropic';
    if (modelName.includes('gemini')) return 'google';
    if (modelName.includes('llama')) return 'fireworks';
    return 'unknown';
  }
}
