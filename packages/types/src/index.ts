export interface LLMConfig {
  temperature?: number;
  maxTokens?: number;
  stop?: string[];
}

export interface GenerateRequest {
  prompt: string;
  modelName: string;
  config?: LLMConfig;
}

export interface GenerateResponse {
  content: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface ModelInfo {
  name: string;
  provider: string;
  isAvailable: boolean;
}

export interface ReflectionState {
  messages: Array<{
    role: string;
    content: string;
  }>;
  artifact?: any;
}

export type { LangGraphRunnableConfig } from '@langchain/langgraph-sdk';
