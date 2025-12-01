import { userService } from '../../../services/users';

export default defineEventHandler(async event => {
  const body = await readBody(event);

  const ids = body?.ids;

  return userService.delete(ids);
});
