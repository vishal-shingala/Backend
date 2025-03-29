import { registerUser } from "../controllers/user.controllers.js";
import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/Register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

export default router;