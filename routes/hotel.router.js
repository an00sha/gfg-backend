import express from "express"
const router = express.Router();

// import hotels from "../data/hotels.js";

// router.route('/')
//     .get((req,res) => {
//     res.json(hotels.data);
// })

// instead of getting from a json file, get from db

import hotelHandler from "../controllers/hotelController.js";
router.route('/')
    .get(hotelHandler)

export default router