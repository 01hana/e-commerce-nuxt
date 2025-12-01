import { authService } from '../../../services/auth';

export default defineEventHandler(async event => {
  const body = await readBody(event);

  return await authService.login(body);
});
