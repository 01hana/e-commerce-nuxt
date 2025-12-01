import { authService } from '../../../services/auth';

export default defineEventHandler(async event => {
  const payload = event.context.user;

  return await authService.getUser(payload);
});
