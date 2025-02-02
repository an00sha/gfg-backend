import Wishlist from "../model/wishlist.model.js";
export const createWishlistHandler = async (req,res) => {
    console.log(req.body)
    const newWishlist = new Wishlist(req.body)
    try {
        const savedWishlist = await newWishlist.save()
        res.status(201).json(savedWishlist)
    } catch(err) {
        res.status(400).json({message: "Failed to Create wishlist"})
    }
}

export const getWishlistHandler = async (req,res) => {
    try {
        console.log(req)
        const savedWishlist = await Wishlist.find({})
        savedWishlist ? res.json(savedWishlist) : res.json({message: "No items found in the wishlist"})
    } catch(err) {
        res.status(400).json(err)
    }
}
export const  deleteWishlistHandler = async(req,res) => {
    try {
        console.log(req.params.id)
        await Wishlist.findByIdAndDelete(req.params.id)
        res.json({message: "Hotel Deleted Successfully"})
    } catch(err) {
        console.log(err)
        res.status(400).json({message: "Could not delete hotel from wishlist"})
    }
}
