import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient();

export const prismaService = {
  // CRUD: Services
  async getAll() {
    return prisma.service.findMany();
  },

  async getById(id: number) {
    return prisma.service.findUnique({
      where: { id },
    });
  },

  async create(data: any) {
    return prisma.service.create({
      data,
    });
  },

  async update(id: number, data: any) {
    return prisma.service.update({
      where: { id },
      data,
    });
  },

  async remove(id: number) {
    return prisma.service.delete({
      where: { id },
    });
  },

  // I.1 User-associated data
  async addMyService(userId: string, serviceId: number) {
    return prisma.myServices.create({
      data: {
        userId,
        serviceId,
      },
    });
  },

  async getMyServices(userId: string) {
    return prisma.myServices.findMany({
      where: { userId },
      include: { service: true },
    });
  },
};
