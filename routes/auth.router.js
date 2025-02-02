import e from "express";
import signupHandler from "../controllers/signupController.js";
import loginHandler from "../controllers/loginController.js";
const router = e.Router();


// req: {
//     body: {
//         username: "annu",
//         ...
//     }
// }
router.route('/register')
    .post(signupHandler)

router.route('/login')
    .post(loginHandler)
export default router
