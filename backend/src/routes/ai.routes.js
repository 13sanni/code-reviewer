import { Router } from "express";
import { getAIResponse } from "../controller/ai.controller.js";
const router = Router();

router.get("/", getAIResponse);

export default router;