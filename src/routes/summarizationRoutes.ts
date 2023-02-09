import { Request, Response, Router } from 'express';
import SummarizationService from '../services/SummarizationService';
import { StatusCodes } from 'http-status-codes';
import summarizationInputScheme from '../schemas/summarization/summarizationInputScheme';

class SummarizationController {
  static async getSummarization(req: Request, res: Response) {
    const { error, value } = summarizationInputScheme.validate(req.body);

    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        message: error.message,
      });
    }

    const response = await SummarizationService.getSummarization(value);

    res.json({
      input: value,
      summary: response.data.choices[0].text,
    });
  }
}

const router = Router();
router.post('/', (req, res, next) =>
  SummarizationController.getSummarization(req, res).catch((err) => next(err))
);

export default router;
