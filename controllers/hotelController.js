
import Hotel from "../model/hotel.model.js";
const hotelHandler = async (req, res) => {
    try {
        const hotels = await Hotel.find({})
        hotels ? res.json(hotels) : res.status(404).json({message: "No data found"})
    } catch(err) {
        console.log(err)
    }
}

export default hotelHandler