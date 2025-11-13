import * as blogRepo from "../apis/blogRepository";
import type { BlogPost } from "../types/blogpost";

export async function fetchPosts() {
  const posts = await blogRepo.getAllPosts();
  return posts;
}

export async function createNewPost(post: BlogPost) {
  if (!post.title.trim() || !post.description.trim()) {
    throw new Error("Title and description are required");
  }
  return await blogRepo.createPost(post);
}

export async function updatePost(post: BlogPost) {
  return await blogRepo.updatePost(post);
}

export async function deletePost(postId: number) {
  return await blogRepo.deletePost(postId);
}


