import { Router } from "express";
import { TutorController } from "../controllers";

const router = Router();

router.get('/', TutorController.list);
router.post('/', TutorController.post);

export default router;