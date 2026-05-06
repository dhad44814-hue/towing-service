import { NextResponse } from 'next/server';
import { createSessionToken, validateAdminCredentials } from '@/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
  }

  const validCredentials = await validateAdminCredentials(email, password);
  if (!validCredentials) {
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
  }

  const token = createSessionToken(email);
  const response = NextResponse.json({ ok: true });
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
    sameSite: 'lax'
  });

  return response;
}
