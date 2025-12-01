import { userService } from '../../../services/users';

export default defineEventHandler(async event => {
  const body = await readBody(event);

  const data = await userService.create(body);

  return { data };
});
