import e from "express";
import {createWishlistHandler, getWishlistHandler, deleteWishlistHandler} from "../controllers/wishlistController.js";
import verifyUser from "../middleware/verifyuser.js";
const router = e.Router()
router.route('/')
    .post(verifyUser, createWishlistHandler)
    .get(verifyUser, getWishlistHandler)

router.route('/:id')
    .delete(verifyUser, deleteWishlistHandler)

export default router