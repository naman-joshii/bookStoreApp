import mongoose from "mongoose";

const userSchmema = mongoose.Schema ({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    
})
const User = mongoose.model("User", userSchmema)
export default User;
