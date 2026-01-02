import { categoryService } from '../../../../services/categories';

export default defineEventHandler(async () => {
  const data = await categoryService.getCategories();

  return data;
});
