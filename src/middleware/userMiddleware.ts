import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/login.service';

class UserMiddleware {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const loginUser = req.body;
    const { username, password } = loginUser;

    if (!username) return res.status(400).json({ message: '"username" is required' });
    if (!password) return res.status(400).json({ message: '"password" is required' });

    const result = await this.loginService.login(loginUser);
    if (!result) return res.status(401).json({ message: 'Username or password invalid' });
    next();
  };
}

export default UserMiddleware;