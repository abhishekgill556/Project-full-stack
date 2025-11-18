import * as blogRepo from "../apis/blogRepository";
import type { BlogPost, BlogPostInput } from "../types/blogpost";

export async function fetchPosts() {
  const posts = await blogRepo.getAllPosts();
  return posts;
}

export async function createNewPost(post: BlogPostInput) {
  if (!post.title.trim() || !post.description.trim()) {
    throw new Error("Title and description are required");
  }
  return await blogRepo.createPost({
    title: post.title.trim(),
    description: post.description.trim(),
    link: post.link?.trim() || "#",
  });
}

export async function updatePost(post: BlogPost) {
  return await blogRepo.updatePost(post);
}

export async function deletePost(postId: number) {
  return await blogRepo.deletePost(postId);
}


