import { Router } from "express";
import { reviewRepository } from "../repo/reviewsRepository";

const router = Router();

router.get("/", async (req, res) => {
  const reviews = await reviewRepository.getAll();
  res.json(reviews);
});

router.post("/", async (req, res) => {
  const { name, rating, comment } = req.body;

  if (!name || !comment) {
    return res.status(400).json({ error: "Name and comment are required." });
  }

  const newReview = await reviewRepository.create({
    name,
    rating: Number(rating),
    text: comment
  });

  res.status(201).json(newReview);
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await reviewRepository.delete(id);
  res.status(204).send();
});

export default router;
