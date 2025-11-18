import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const prismaService = {
  getAll() {
    return prisma.service.findMany();
  },

  getById(id: number) {
    return prisma.service.findUnique({ where: { id } });
  },

  create(data: {
    name: string;
    price: number;
    duration: number;
    category: string;
    description?: string;
    image?: string;
  }) {
    return prisma.service.create({ data });
  },

  update(id: number, data: any) {
    return prisma.service.update({
      where: { id },
      data
    });
  },

  remove(id: number) {
    return prisma.service.delete({
      where: { id }
    });
  }
};
