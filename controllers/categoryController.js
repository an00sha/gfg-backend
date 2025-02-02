import Category from "../model/category.model.js";
const categoryHandler = async (req, res) => {
    try {
        const categories = await Category.find({})
        categories ? res.json(categories) : res.status(404).json({message: "No data dound"})
    } catch(err) {
        console.log(err)

    }
}

export default categoryHandler