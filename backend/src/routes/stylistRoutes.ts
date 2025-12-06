import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { PrismaClient } from "../../prisma/generated/client";
 
const prisma = new PrismaClient();
const router = Router();
 
// -------------------------
//  PUBLIC: view stylists
// -------------------------
router.get("/", async (req, res) => {
  const stylists = await prisma.stylist.findMany();
  res.json(stylists);
});
 
// -------------------------
//  PROTECTED: create stylist
// -------------------------
router.post("/", requireAuth(), async (req, res) => {
  const { name, specialty, experience } = req.body;
 
  const stylist = await prisma.stylist.create({
    data: {
      name,
      specialty,
      experience,
      createdBy: req.auth.userId, // Store logged in user
    },
  });
 
  res.json(stylist);
});
 
// -------------------------
//  PROTECTED: delete stylist
// -------------------------
router.delete("/:id", requireAuth(), async (req, res) => {
  const id = req.params.id;
 
  await prisma.stylist.delete({
    where: { id },
  });
 
  res.json({ message: "Stylist removed" });
});
 
export default router;