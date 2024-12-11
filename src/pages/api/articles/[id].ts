import type { APIRoute } from 'astro';
import { deleteArticle, updateArticle } from '../../../lib/articles';
import { isAuthenticated } from '../../../middleware/auth';

export const DELETE: APIRoute = async ({ params }) => {
  if (!await isAuthenticated(Astro)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  await deleteArticle(id);
  return new Response(null, { status: 204 });
};

export const PUT: APIRoute = async ({ request, params }) => {
  if (!await isAuthenticated(Astro)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const id = parseInt(params.id!, 10);
  const data = await request.json();
  await updateArticle(id, data);
  return new Response(null, { status: 204 });
};