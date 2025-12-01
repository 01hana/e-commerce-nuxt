import jwt from 'jsonwebtoken';

const config = useRuntimeConfig();

const SETUP_TOKEN_SECRET = config.SETUP_TOKEN_SECRET;
const ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRES_IN = '1h';

export function signAccessToken(payload: object) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
}

export function verifyAccessToken(token: string) {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch {
    return null;
  }
}

export function signSetupToken(payload: object) {
  return jwt.sign(payload, SETUP_TOKEN_SECRET, { expiresIn: '30m' });
}

export function verifySetupToken(token: string) {
  try {
    return jwt.verify(token, SETUP_TOKEN_SECRET);
  } catch {
    return null;
  }
}
