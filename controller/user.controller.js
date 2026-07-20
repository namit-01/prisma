import { Prisma } from "@prisma/client";
import prisma from "../db/db.config.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return res.status(200).json(newUser);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email: email } });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const delet = async (req, res) => {
  try {
    const { email } = req.body;
    await prisma.user.delete({
      where: {
        email: email,
      },
    });
    return res.status(200).json({ message: "deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
