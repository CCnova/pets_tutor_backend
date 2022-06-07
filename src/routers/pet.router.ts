import { Router } from "express";
import { PetController } from "../controllers";

const router = Router();

router.get("/", PetController.list);
router.post("/", PetController.post);

export default router;