import dotenv from 'dotenv';

dotenv.config();

class EnvError extends Error {
  constructor(key: string) {
    super(`${key} must must be in environment variables`);
  }
}

if (!process.env.OPENAI_API_KEY) throw new EnvError('OPENAI_API_KEY');
if (!process.env.OPENAI_ORGANIZATION) throw new EnvError('OPENAI_ORGANIZATION');

export const port = process.env.PORT || 4000;
export const openAI = {
  apiKey: process.env.OPENAI_API_KEY as string,
  organization: process.env.OPENAI_ORGANIZATION as string,
};
