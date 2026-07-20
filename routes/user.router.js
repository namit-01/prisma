import express from "express";
import { createUser, delet, getUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/login", createUser);
router.post("/get", getUser);
router.post("/del", delet);
export default router;
