import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const JWT_SECRET = 'senha_secreta';

class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const { body } = req;

    const token = jwt.sign({ body }, JWT_SECRET, {
      expiresIn: '1d', 
    });

    await this.userService.create(body);
    return res.status(201).json({ token });
  };
}

export default UsersController;