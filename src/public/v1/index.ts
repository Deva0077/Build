import { Router } from "express";
import userRouter from "./userModule/user.Routes";

const router = Router();

router.use("user", userRouter);


export default router;

