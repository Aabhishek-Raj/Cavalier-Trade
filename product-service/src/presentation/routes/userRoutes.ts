import express from "express";
import { expressAdapter } from "../adapters/expressAdapter";
import { createUserController, findUserController } from "../../app";

const router = express.Router();

router.post("/api/users", expressAdapter(createUserController));
router.get("/api/users/:id", expressAdapter(findUserController)); // ✅ New GET endpoint

export default router;
