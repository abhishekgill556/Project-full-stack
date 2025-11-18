"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogPost = exports.updateBlogPost = exports.createBlogPost = exports.getBlogPostById = exports.fetchAllBlogPosts = void 0;
const prisma_1 = __importDefault(require("../prisma"));
function mapBlogToDto(blog) {
    return {
        id: blog.id,
        title: blog.title,
        description: blog.description,
        link: blog.link,
        createdAt: blog.createdAt,
    };
}
const fetchAllBlogPosts = async () => {
    const data = await prisma_1.default.blog.findMany({
        orderBy: { createdAt: "desc" },
    });
    return data.map(mapBlogToDto);
};
exports.fetchAllBlogPosts = fetchAllBlogPosts;
const getBlogPostById = async (id) => {
    const blog = await prisma_1.default.blog.findUnique({
        where: { id },
    });
    return blog ? mapBlogToDto(blog) : null;
};
exports.getBlogPostById = getBlogPostById;
const createBlogPost = async (post) => {
    const { id, createdAt, ...data } = post;
    const created = await prisma_1.default.blog.create({
        data,
    });
    return mapBlogToDto(created);
};
exports.createBlogPost = createBlogPost;
const updateBlogPost = async (id, post) => {
    const { id: _ignore, createdAt, ...data } = post;
    const updated = await prisma_1.default.blog.update({
        where: { id },
        data,
    });
    return mapBlogToDto(updated);
};
exports.updateBlogPost = updateBlogPost;
const deleteBlogPost = async (id) => {
    await prisma_1.default.blog.delete({
        where: { id },
    });
};
exports.deleteBlogPost = deleteBlogPost;
