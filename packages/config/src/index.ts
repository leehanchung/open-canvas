export const ANTHROPIC_MODELS = [
  {
    name: "claude-3-5-haiku-20241022",
    label: "Claude 3.5 Haiku",
    isNew: true,
  },
  {
    name: "claude-3-haiku-20240307",
    label: "Claude 3 Haiku (old)",
    isNew: false,
  },
];

export const FIREWORKS_MODELS = [
  {
    name: "accounts/fireworks/models/llama-v3p1-70b-instruct",
    label: "Fireworks Llama 70B",
    isNew: false,
  },
];

export const GEMINI_MODELS = [
  {
    name: "gemini-1.5-flash",
    label: "Gemini 1.5 Flash",
    isNew: false,
  },
];

export const OPENAI_MODELS = [
  {
    name: "gpt-4o-mini",
    label: "GPT-4o mini",
    isNew: false,
  },
];

export const DEFAULT_MODEL_NAME = "gpt-4o-mini";

export const LLM_CONFIG = {
  defaultTemperature: 0,
  maxTokens: 2048,
};
