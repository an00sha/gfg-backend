import User from "../model/user.model.js";
import CryptoJS from "crypto-js";
const signupHandler = async (req, res) => {
    try {
        const userObject = {
            username: req.body.username,
            email: req.body.email,
            number: req.body.number,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        }
        const newUser = new User(userObject)
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch(err) {
        console.log(err)
        res.status(400).json({message: "Error creating a user"})
    }
}

export default signupHandler