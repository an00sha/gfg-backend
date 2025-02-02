import  jwt  from "jsonwebtoken";

const verifyUser = (req,res,next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }

        req.user = user; // Store the decoded user info in `req.user`
        next();
    });
}

export default verifyUser