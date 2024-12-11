import type { APIRoute } from 'astro';
import { createArticle } from '../../../lib/articles';
import { isAuthenticated } from '../../../middleware/auth';

export const POST: APIRoute = async ({ request, redirect }) => {
  if (!await isAuthenticated(Astro)) {
    return new Response('Unauthorized', { status: 401 });
  }

  const formData = await request.formData();
  const article = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    content: formData.get('content') as string,
    category: formData.get('category') as string,
    image: formData.get('image') as string,
  };

  await createArticle(article);
  return redirect('/admin');
};