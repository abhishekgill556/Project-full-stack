import prisma from "./prismaService";
import type { BlogPostDto } from "../types/blogPostDto";

function mapBlogToDto(blog: any): BlogPostDto {
  const dto: BlogPostDto = {
    id: blog.id,
    title: blog.title,
    description: blog.description,
    link: blog.link,
    createdAt: blog.createdAt,
  };
  (dto as any).authorClerkId = blog.authorClerkId ?? undefined;
  return dto;
}

export const fetchAllBlogPosts = async (): Promise<BlogPostDto[]> => {
  const data = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });
  return data.map(mapBlogToDto);
};

export const getBlogPostById = async (id: number): Promise<BlogPostDto | null> => {
  const blog = await prisma.blog.findUnique({
    where: { id },
  });

  return blog ? mapBlogToDto(blog) : null;
};

export const createBlogPost = async (post: BlogPostDto, authorClerkId?: string): Promise<BlogPostDto> => {
  const { id, createdAt, ...data } = post;

  const created = await prisma.blog.create({
    data: { ...data, authorClerkId },
  });

  return mapBlogToDto(created);
};

export const updateBlogPost = async (id: number, post: BlogPostDto): Promise<BlogPostDto> => {
  const { id: _ignore, createdAt, ...data } = post;

  const updated = await prisma.blog.update({
    where: { id },
    data,
  });

  return mapBlogToDto(updated);
};

export const deleteBlogPost = async (id: number): Promise<void> => {
  await prisma.blog.delete({
    where: { id },
  });
};

export const fetchMyBlogPosts = async (clerkId: string): Promise<BlogPostDto[]> => {
  const data = await prisma.blog.findMany({
    where: { authorClerkId: clerkId },
    orderBy: { createdAt: "desc" },
  });
  return data.map(mapBlogToDto);
};
