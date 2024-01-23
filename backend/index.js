import express from "express";
import { conn } from "./mongo.connect.js";
import userRouter from './user/user.routes.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
conn();

app.use('/user', userRouter )

app.listen(PORT, () => {
  console.log(`server is Listening at ${PORT}`);
});
