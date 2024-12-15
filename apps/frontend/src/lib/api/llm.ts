import { GenerateRequest, GenerateResponse, ReflectionState, LangGraphRunnableConfig } from '@open-canvas/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const llmApi = {
  generate: async (request: GenerateRequest): Promise<GenerateResponse> => {
    const response = await fetch(`${API_URL}/api/llm/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate response');
    }
    
    return response.json();
  },

  reflect: async (state: ReflectionState, config: LangGraphRunnableConfig) => {
    const response = await fetch(`${API_URL}/api/llm/reflect`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state, config }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate reflection');
    }

    return response.json();
  },

  getAvailableModels: async () => {
    const response = await fetch(`${API_URL}/api/llm/models`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch available models');
    }
    
    return response.json();
  },
};
