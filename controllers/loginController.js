import User from "../model/user.model.js";
import CryptoJS from "crypto-js";
import  jwt  from "jsonwebtoken";
const loginHandler = async (req,res) => {
    try{
        const user = await User.findOne({number: req.body.number})
        !user && res.status(401).json({message: "Invalid Mobile Number"})
        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
        decodedPassword !== req.body.password && res.json(401).json({message: "Incorrect Password"})
        const {password, ...rest} = user._doc // doc contains all fields of that object of db
        const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN)
        res.json({...rest, accessToken})
    } catch(err) {
        console.log(err)
    }
}

export default loginHandler