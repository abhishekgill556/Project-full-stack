import "reflect-metadata";
import { Request, Response } from "express";
import { Controller, Get, Post, Put, Delete, Req, Res, Param, UseBefore } from "routing-controllers";
import { requireAuth } from "@clerk/express";
import * as BlogService from "../services/blogService";
import { validateRequest } from "../middlewares/validate"
import { blogPostSchema } from "../validations/blogPostValidation";
import { errorResponse, successResponse } from "../models/responseModel";

@Controller()
export class BlogController {
  @Get("/blogs")
  async getAll(@Req() _req: Request, @Res() res: Response) {
    const blogs = await BlogService.fetchAllBlogPosts();
    return res.status(200).json(successResponse(blogs));
  }

  @Get("/blogs/:id")
  async getById(@Param("id") id: string, @Res() res: Response) {
    const blog = await BlogService.getBlogPostById(Number(id));
    if (!blog) return res.status(404).json(errorResponse("Blog not found"));
    return res.status(200).json(successResponse(blog));
  }

  @Post("/blogs")
  @UseBefore(validateRequest(blogPostSchema))
  async create(@Req() req: Request, @Res() res: Response) {
    const clerkId = (req as any).auth?.userId as string | undefined;
    const blog = await BlogService.createBlogPost(req.body, clerkId);
    return res.status(201).json(successResponse(blog, "Blog created"));
  }

  @Put("/blogs/:id")
  @UseBefore(validateRequest(blogPostSchema))
  async update(@Param("id") id: string, @Req() req: Request, @Res() res: Response) {
    const blog = await BlogService.updateBlogPost(Number(id), req.body);
    return res.status(200).json(successResponse(blog, "Updated"));
  }

  @Delete("/blogs/:id")
  async delete(@Param("id") id: string, @Res() res: Response) {
    await BlogService.deleteBlogPost(Number(id));
    return res.status(200).json(successResponse(null, "Deleted"));
  }

  @Get("/blogs/my")
  async myBlogs(@Req() req: Request, @Res() res: Response) {
    const clerkId = (req as any).auth?.userId as string | undefined;
    if (!clerkId) {
      return res.status(401).json(errorResponse("Unauthorized"));
    }
    const blogs = await BlogService.fetchMyBlogPosts(clerkId);
    return res.status(200).json(successResponse(blogs));
  }
}
