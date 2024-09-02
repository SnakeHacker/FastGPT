import type { LLMModelItemType, VectorModelItemType } from './model.d';

export const defaultQAModels: LLMModelItemType[] = [
  {
    model: 'glm-4-0520',
    name: 'glm-4-0520',
    maxContext: 16000,
    maxResponse: 16000,
    quoteMaxToken: 13000,
    maxTemperature: 1.2,
    charsPointsPrice: 0,
    censor: false,
    vision: false,
    datasetProcess: true,
    toolChoice: true,
    functionCall: false,
    customCQPrompt: '',
    customExtractPrompt: '',
    defaultSystemChatPrompt: '',
    defaultConfig: {}
  }
];

export const defaultVectorModels: VectorModelItemType[] = [
  {
    model: 'm3e',
    name: 'm3e',
    charsPointsPrice: 0,
    defaultToken: 500,
    maxToken: 3000,
    weight: 100
  }
];
