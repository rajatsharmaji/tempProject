import { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const URI = process.env.URI;

export const conn = async () => {
    try{
    await connect(URI);
    console.log("db connected");
    }
    catch{(e)=>{console.log(e);}}
}