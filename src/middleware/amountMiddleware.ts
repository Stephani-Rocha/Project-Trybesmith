import { Request, Response, NextFunction } from 'express';

class AmountMiddleware {
  public amount = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;

    if (!amount) return res.status(400).json({ message: '"amount" is required' });
    if (typeof amount !== 'string') {
      return res.status(422).json({ message: '"amount" must be a string' });
    }
    if (amount.length < 3) {
      return res.status(422)
        .json({ message: '"amount" length must be at least 3 characters long' });
    }      
    next();
  };
}

export default AmountMiddleware;