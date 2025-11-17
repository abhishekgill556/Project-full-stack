"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./prisma"));
async function main() {
    const count = await prisma_1.default.blog.count();
    if (count > 0) {
        console.log(`Blog table already has ${count} rows. Skipping seed.`);
        return;
    }
    await prisma_1.default.blog.createMany({
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
    const after = await prisma_1.default.blog.count();
    console.log(`Seeded ${after} blog posts.`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma_1.default.$disconnect();
});
