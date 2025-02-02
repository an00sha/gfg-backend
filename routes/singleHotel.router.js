import express from "express";
import singleHotelHandler from "../controllers/singleHotelcontroller.js";
const router = express.Router()



router.route('/:id')
    .get(singleHotelHandler)

export default router