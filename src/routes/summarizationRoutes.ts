import { Request, Response, Router } from 'express';
import SummarizationService from '../services/SummarizationService';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

class SummarizationController {
  static async getSummarization(req: Request, res: Response) {
    const { text } = req.body;

    // TODO: VALIDATION
    if (typeof text !== 'string') {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, message: ReasonPhrases.BAD_REQUEST });
    }

    const response = await SummarizationService.getSummarization(text);
    res.json(response);
  }
}

const router = Router();
router.post('/', SummarizationController.getSummarization);

export default router;
