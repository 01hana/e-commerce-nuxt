const statusTexts: Record<number, string> = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
};

export function appError(statusCode: number, message: string) {
  return createError({
    statusCode,
    statusMessage: statusTexts[statusCode] ?? 'Error',
    message,
  });
}
