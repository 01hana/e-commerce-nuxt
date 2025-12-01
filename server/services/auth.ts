import { userRepository } from '../repositories/users';
import { authRepository } from '../repositories/auth';
import { appError } from '../utils/appError';
import bcrypt from 'bcrypt';

export const authService = {
  async login(body: any) {
    const { account, password } = body;

    const user = await authRepository.findByAccount(account);

    if (!user) {
      throw appError(400, '帳號或密碼錯誤');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw appError(400, '帳號或密碼錯誤');
    }

    // 不回傳密碼
    const payload = {
      id: user.id,
      account: user.account,
      name: user.name,
      email: user.email,
    };

    const token = signAccessToken(payload);

    return {
      data: {
        token,
        user: payload,
      },
    };
  },

  async firstLogin(body: any) {},

  async getUser(tokenPayload: any) {
    const user = await userRepository.findById(tokenPayload.id);

    if (!user) throw appError(401, '使用者不存在');

    return { data: user };
  },
};
