import { ChatModelCard } from '@/types/llm';

import BedrockProvider from './bedrock';
import GoogleProvider from './google';
import OpenAIProvider from './openai';
import ZhiPuProvider from './zhipu';

export const LOBE_DEFAULT_MODEL_LIST: ChatModelCard[] = [
  OpenAIProvider.chatModels,
  ZhiPuProvider.chatModels,
  BedrockProvider.chatModels,
  GoogleProvider.chatModels,
].flat();

export { default as BedrockProvider } from './bedrock';
export { default as GoogleProvider } from './google';
export { default as OpenAIProvider } from './openai';
export { default as ZhiPuProvider } from './zhipu';
