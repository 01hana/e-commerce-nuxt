import type { H3Event } from 'h3';
import { readMultipartFormData } from 'h3';

export interface ParsedMultipart {
  body: Record<string, any>;
  files: Record<string, MultiPartFile[]>;
}

export interface MultiPartFile {
  name: string;
  filename: string;
  type: string;
  data: Buffer;
}

export async function parseMultipart(event: H3Event): Promise<ParsedMultipart> {
  const form = await readMultipartFormData(event);

  const body: Record<string, any> = {};
  const files: Record<string, MultiPartFile[]> = {};

  if (!form) return { body, files };

  for (const item of form) {
    const rawName = item.name ?? '';
    const name = rawName.replace('[]', '');

    // -------------------------
    // 檔案（有 filename）
    // -------------------------
    if (item.filename) {
      const file: MultiPartFile = {
        name,
        filename: item.filename,
        type: item.type ?? '',
        data: item.data,
      };

      if (!files[name]) files[name] = [];

      files[name].push(file);

      continue;
    }

    // -------------------------
    // 一般欄位
    // -------------------------
    let value: any = item.data.toString();

    // 自動轉型
    if (value === 'true') value = true;
    else if (value === 'false') value = false;
    else if (!isNaN(Number(value)) && value !== '') value = Number(value);

    // -------------------------
    // 陣列欄位：images[]
    // -------------------------
    if (rawName.endsWith('[]')) {
      if (!body[name]) body[name] = [];

      body[name].push(value);
    } else {
      body[name] = value;
    }
  }

  return { body, files };
}
