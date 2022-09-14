import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/login.service';

const JWT_SECRET = 'senha_secreta';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const login = req.body;
    await this.loginService.login(login);

    const token = jwt.sign({ login }, JWT_SECRET, {
      expiresIn: '1d', 
    });
  
    return res.status(200).json({ token });
  };
}

export default LoginController;