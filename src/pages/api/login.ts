import type { APIRoute } from 'astro';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const user = await prisma.user.findUnique({
    where: { username }
  });

  if (!user || !await bcrypt.compare(password, user.password)) {
    return redirect('/admin/login?error=invalid');
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });
  
  cookies.set('admin', token, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 // 24 hours
  });

  return redirect('/admin');
};