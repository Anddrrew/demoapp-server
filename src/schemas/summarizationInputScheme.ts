import * as Joi from 'joi';

const temperature = 0.7;
const maxTokens = 60;
const topP = 1.0;
const frequencyPenalty = 0.0;
const presencePenalty = 1;

const summarizationInputScheme = Joi.object({
  text: Joi.string().min(0).max(3000).required(),
  maxTokens: Joi.number().min(0).max(990).default(maxTokens),
  temperature: Joi.number().min(0).max(1).default(temperature),
  topP: Joi.number().min(0).max(1).default(topP),
  frequencyPenalty: Joi.number().min(0).max(2).default(frequencyPenalty),
  presencePenalty: Joi.number().min(0).max(2).default(presencePenalty),
});

export default summarizationInputScheme;
