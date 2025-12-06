import { Router } from "express";
import * as BlogService from "../services/blogService";
import { validateRequest } from "../middlewares/validate";
import { blogPostSchema } from "../validations/blogPostValidation";
import { errorResponse, successResponse } from "../models/responseModel";

const router = Router();

router.get("/", async (req, res) => {
  const blogs = await BlogService.fetchAllBlogPosts();
  return res.status(200).json(successResponse(blogs));
});

router.get("/my", async (req, res) => {
  const clerkId = (req as any).auth?.userId as string | undefined;
  if (!clerkId) {
    return res.status(401).json(errorResponse("Unauthorized"));
  }
  const blogs = await BlogService.fetchMyBlogPosts(clerkId);
  return res.status(200).json(successResponse(blogs));
});

router.get("/:id", async (req, res) => {
  const blog = await BlogService.getBlogPostById(Number(req.params.id));
  if (!blog) return res.status(404).json(errorResponse("Blog not found"));
  return res.status(200).json(successResponse(blog));
});

router.post("/", validateRequest(blogPostSchema), async (req, res) => {
  try {
    const clerkId = (req as any).auth?.userId as string | undefined;
    const blog = await BlogService.createBlogPost(req.body, clerkId);
    return res.status(201).json(successResponse(blog, "Blog created"));
  } catch (error) {
    console.error("Error creating blog post:", error);
    return res.status(500).json(errorResponse(error instanceof Error ? error.message : "Failed to create blog post"));
  }
});

router.put("/:id", validateRequest(blogPostSchema), async (req, res) => {
  const blog = await BlogService.updateBlogPost(Number(req.params.id), req.body);
  return res.status(200).json(successResponse(blog, "Updated"));
});

router.delete("/:id", async (req, res) => {
  await BlogService.deleteBlogPost(Number(req.params.id));
  return res.status(200).json(successResponse(null, "Deleted"));
});

export default router;
