import type { APIContext } from 'astro';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variable

export async function isAuthenticated(context: APIContext) {
  const token = context.cookies.get('admin')?.value;
  
  if (!token) {
    return false;
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}