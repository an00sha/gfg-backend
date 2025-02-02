import e from "express";
import categoryHandler from "../controllers/categoryController.js";
const router = e.Router();

router.route('/')
    .get(categoryHandler)

export default router