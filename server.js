// https://github.com/prakashsakari/Travel_App_Backend_GFG_Student_Version
import express from "express"
import mongoose from "mongoose";

import hotelRouter from "./routes/hotel.router.js"
import singleHotelRouter from "./routes/singleHotel.router.js"
import categoryRouter from "./routes/category.router.js"
import userRouter from "./routes/auth.router.js"
import wishlistRouter from "./routes/wishlist.router.js"

import hotelDataAddedToDBRouter from "./routes/dataimport.router.js"
import categoryDataAddedToDBRouter from './routes/categoryimport.router.js'

import connectDB from "./config/dbconfig.js";

const app = express();
// app.use(cors());
app.use(express.json())
connectDB()
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.use("/api/hoteldata", hotelDataAddedToDBRouter)
app.use("/api/categorydata", categoryDataAddedToDBRouter)

app.use("/api/hotels", hotelRouter)
app.use("/api/hotels", singleHotelRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/auth", userRouter)
app.use("/api/wishlist", wishlistRouter)
mongoose.connection.once('open', () => {
    console.log("DB Connected")
    app.listen(process.env.PORT || PORT, () => {
        console.log("port is listening")
    })
})