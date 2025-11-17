import type { BlogPost } from "../types/blogpost";
import { blogPosts } from "../data/blogData";

let posts: BlogPost[] = [...blogPosts]; 

export async function getAllPosts(): Promise<BlogPost[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...posts]), 100);
  });
}

export async function getPostById(postId: number): Promise<BlogPost> {
  return new Promise((resolve, reject) => {
    const found = posts.find((p) => p.id === postId);
    if (!found) reject(new Error(`Post with id ${postId} not found`));
    else resolve(found);
  });
}

export async function createPost(post: BlogPost): Promise<BlogPost> {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 100);
  });
}

export async function updatePost(updated: BlogPost): Promise<BlogPost> {
  return new Promise((resolve, reject) => {
    const index = posts.findIndex((p) => p.id === updated.id);
    if (index === -1) reject(new Error(`Post with id ${updated.id} not found`));
    else {
      posts[index] = updated;
      resolve(updated);
    }
  });
}

export async function deletePost(postId: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const exists = posts.some((p) => p.id === postId);
    if (!exists) reject(new Error(`Post with id ${postId} not found`));
    posts = posts.filter((p) => p.id !== postId);
    resolve();
  });
}
