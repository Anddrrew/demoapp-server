import { Configuration, OpenAIApi } from 'openai';
import { openAI } from '../config';

const configuration = new Configuration({
  organization: openAI.organization,
  apiKey: openAI.apiKey,
});

export default new OpenAIApi(configuration);
