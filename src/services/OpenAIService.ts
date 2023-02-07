import { Configuration, OpenAIApi } from 'openai';
import { openAI } from '../config';

const configuration = new Configuration({
  organization: openAI.organization,
  apiKey: openAI.apiKey,
});

class OpenAIService {
  private api = new OpenAIApi(configuration);

  getModels = () => this.api.listModels().then((res) => res.data.data);
}

export default new OpenAIService();
