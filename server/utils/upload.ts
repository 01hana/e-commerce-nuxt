import fs from 'fs/promises';
import path from 'path';

export async function saveFile(file: any) {
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${file.filename}`;
  const filepath = path.join(uploadDir, filename);

  await fs.writeFile(filepath, file.data);

  return `/uploads/${filename}`;
}
