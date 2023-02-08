import OpenAIService from './OpenAIService';

class SummarizationService {
  private api = OpenAIService;

  async getSummarization(prompt: string) {
    const response = await this.api.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt} tl;dr:`,
      temperature: 0.7,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 1,
    });

    return response.data;
  }
}

export default new SummarizationService();
