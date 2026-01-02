import { productService } from '../../../../../services/products';
import { saveFile } from '../../../../../utils/upload';
import { parseMultipart } from '../../../../../utils/parseMultipart';

export default defineEventHandler(async event => {
  const categoryId = event.context.params!.id;

  const { body, files } = await parseMultipart(event);

  body.category_id = categoryId;

  // cover image
  if (files.cover_url?.length) {
    body.cover_url = await saveFile(files.cover_url[0]);
  }

  // multiple fills
  if (files.images?.length) {
    body.images = [];

    for (const f of files.images) {
      body.images.push(await saveFile(f));
    }
  }

  console.log(body);

  return await productService.create(body);
});
