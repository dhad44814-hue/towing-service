import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'change_me_to_a_strong_secret';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'digitalmarketingskills46@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'ranazamin@28';

export type AdminSession = {
  email: string;
  role: 'admin';
};

export function createSessionToken(email: string) {
  return jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
}

export function verifySession(token: string) {
  return jwt.verify(token, JWT_SECRET) as AdminSession & { iat: number; exp: number };
}

export async function validateAdminCredentials(email: string, password: string) {
  const normalizedEmail = email.toLowerCase().trim();
  if (normalizedEmail !== ADMIN_EMAIL.toLowerCase().trim()) {
    return false;
  }

  const hashedPassword = process.env.ADMIN_PASSWORD_HASH;
  if (hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }

  return password === ADMIN_PASSWORD;
}
