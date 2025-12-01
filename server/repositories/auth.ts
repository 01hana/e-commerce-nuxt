import { db } from '../utils/db';

class AuthRepository {
  public async findByAccount(account: string) {
    const [rows]: any = await db.query(
      `SELECT 
        BIN_TO_UUID(id,1) AS id,
        account,
        name,
        email,
        password,
        status
     FROM users
     WHERE account = ?
     LIMIT 1`,
      [account],
    );

    return rows[0] || null;
  }
}

export const authRepository = new AuthRepository();
