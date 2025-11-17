import prisma from "./prisma";

async function main() {
  const count = await prisma.blog.count();
  if (count > 0) {
    console.log(`Blog table already has ${count} rows. Skipping seed.`);
    return;
  }

  await prisma.blog.createMany({
    data: [
      {
        title: "Welcome to our salon blog",
        description: "News, tips, and styles from our stylists.",
        link: "https://example.com/welcome",
      },
      {
        title: "Winter hair care essentials",
        description: "Keep your hair healthy during the cold months.",
        link: "https://example.com/winter-hair-care",
      },
      {
        title: "Top color trends this season",
        description: "A roundup of trending shades and techniques.",
        link: "https://example.com/color-trends",
      },
    ],
  });

  const after = await prisma.blog.count();
  console.log(`Seeded ${after} blog posts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
