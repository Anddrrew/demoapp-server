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
  }
}

export default new SummarizationService();
