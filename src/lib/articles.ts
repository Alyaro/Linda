import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getArticles() {
  return prisma.article.findMany({
    orderBy: {
      publishDate: 'desc'
    }
  });
}

export async function getArticle(id: number) {
  return prisma.article.findUnique({
    where: { id }
  });
}

export async function createArticle(data: any) {
  return prisma.article.create({
    data
  });
}

export async function updateArticle(id: number, data: any) {
  return prisma.article.update({
    where: { id },
    data
  });
}

export async function deleteArticle(id: number) {
  return prisma.article.delete({
    where: { id }
  });
}