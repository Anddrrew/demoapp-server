import OpenAIError from '../utils/OpenAIError';
import OpenAIService from './OpenAIService';

type SummarizationInput = {
  text: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
};

class SummarizationService {
  private api = OpenAIService;

  async getSummarization(input: SummarizationInput) {
    const { text, temperature, maxTokens, topP, frequencyPenalty, presencePenalty } = input;

    try {
      const response = await this.api.createCompletion({
        model: 'text-davinci-003',
        prompt: `${text} tl;dr:`,
        temperature: temperature,
        max_tokens: maxTokens,
        top_p: topP,
        frequency_penalty: frequencyPenalty,
        presence_penalty: presencePenalty,
      });

      return response;
    } catch (err: any) {
      if (err.response) {
        throw new OpenAIError(err.response.status, JSON.stringify(err.response.data));
      }
      throw err;
    }
  }
}

export default new SummarizationService();
