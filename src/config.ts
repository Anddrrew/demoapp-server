import dotenv from 'dotenv';

dotenv.config();

class EnvError extends Error {
  constructor(key: string) {
    super(`${key} must must be in environment variables`);
  }
}

if (!process.env.OPENAI_API_KEY) throw new EnvError('OPENAI_API_KEY');
if (!process.env.OPENAI_ORGANIZATION) throw new EnvError('OPENAI_ORGANIZATION');
if (!process.env.AUTH0_AUDIENCE) throw new EnvError('AUTH0_AUDIENCE');
if (!process.env.AUTH0_ISSUER_URL) throw new EnvError('AUTH0_ISSUER_URL');

export const port = process.env.PORT || 4000;
export const openAI = {
  apiKey: process.env.OPENAI_API_KEY as string,
  organization: process.env.OPENAI_ORGANIZATION as string,
};
export const auth0 = {
  audience: process.env.AUTH0_AUDIENCE as string,
  issuerBaseURL: process.env.AUTH0_ISSUER_URL as string,
};
