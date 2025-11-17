export interface BlogPost {
  id: number;
  title: string;
  description: string;
  link: string;
  createdAt?: string;
}

export type BlogPostInput = {
  title: string;
  description: string;
  link?: string;
};