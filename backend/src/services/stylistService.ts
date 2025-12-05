import prisma from "./prismaService";

export default {
  async getAll() {
    const rows = await prisma.stylist.findMany();

    const grouped: any = {};

    rows.forEach((r) => {
      if (!grouped[r.category]) grouped[r.category] = {};
      grouped[r.category][r.level] = r.price;
    });

    return grouped;
  },

  async update(category: string, levels: Record<string, number>) {
    await prisma.stylist.deleteMany({ where: { category } });

    const entries = Object.entries(levels).map(([level, price]) => ({
      category,
      service: category,
      level,
      price,
    }));

    await prisma.stylist.createMany({ data: entries });
  },

  async remove(category: string) {
    await prisma.stylist.deleteMany({ where: { category } });
  }
};
