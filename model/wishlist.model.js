import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    hotelId : {type: String, required: true}
})

const Wishlist = new mongoose.model("Wishlist", wishlistSchema)

export default Wishlist