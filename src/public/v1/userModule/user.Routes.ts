import Router from "express";
import userController from  "./user.Controller"


const router = Router();

router.post("/createUser", userController.createUser);

export default router;