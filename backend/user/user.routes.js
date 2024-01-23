import express from "express";
import { addUserService } from "./user.service.js";
import { getUser, getUserByName } from "./user.service.js";

const userRouter = express.Router();


userRouter.get('/get',getUser)
userRouter.get('/get:name', getUserByName)
userRouter.post('/add',addUserService)



export default userRouter