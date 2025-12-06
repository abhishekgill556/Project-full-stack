import { PrismaClient } from "../../prisma/generated/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const syncUser = async (req: Request, res: Response) => {
  try {
    const clerkId = req.auth.userId; 
    const email = req.auth.session?.emailAddress || null;

    let user = await prisma.user.findUnique({
      where: { clerkId }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId,
          email
        }
      });
    }

    return res.json({ success: true, user });
  } catch (error) {
    console.error("Sync user error:", error);
    return res.status(500).json({ success: false, error });
  }
};
