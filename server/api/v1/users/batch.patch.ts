import { userService } from '../../../services/users';

export default defineEventHandler(async event => {
  const { ids, status } = await readBody(event);

  return await userService.actionBatch(ids, status);
});
