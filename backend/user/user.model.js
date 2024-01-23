import mongoose, { Schema } from "mongoose";

const user = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
    }
)

export default mongoose.model("User", user)