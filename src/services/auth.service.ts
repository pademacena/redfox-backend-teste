import { sign } from 'jsonwebtoken';
import { BaseService } from './base.service';

export class AuthService extends BaseService {
  public async authenticate(userName: string) {
    const token = this.tokenGenerate(userName);
    return token;
  }

  private tokenGenerate(user: string) {
    const token = sign(
      { user },
      `${process.env.HASH_TOKEN}`,
      {
        subject: user,
        expiresIn: '1d'
      }
    );
    return token;
  }
}
