import { Request, Response, NextFunction } from 'express';

class LevelMiddleware {
  public level = async (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;

    console.log(typeof level);

    if (level < 1) {
      return res.status(422)
        .json({ message: '"level" must be greater than or equal to 1' });
    }
    if (!level) return res.status(400).json({ message: '"level" is required' });    
    if (typeof level !== 'number') {
      return res.status(422).json({ message: '"level" must be a number' });
    }
    next();
  };
}

export default LevelMiddleware;