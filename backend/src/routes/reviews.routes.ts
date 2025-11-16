import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (req, res) => {
  const reviews = await prisma.review.findMany();
  res.json(reviews);
});

router.post("/", async (req, res) => {
  const { name, rating, comment } = req.body;

  if (!name || !comment) {
    return res.status(400).json({ error: "Name and comment are required." });
  }

  const newReview = await prisma.review.create({
    data: {
      name,
      rating,
      comment,
    },
  });

  res.status(201).json(newReview);
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  await prisma.review.delete({
    where: { id },
  });

  res.status(204).send();
});

export default router;
