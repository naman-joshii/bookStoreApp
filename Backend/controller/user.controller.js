import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async(req,res) => {
    try {
        const { name,email,password } = req.body;
        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({message: "Email already exists"})
        }

        const hashPass = await bcryptjs.hash(password, 10);


        const newUser = new User({ 
            name, email, password: hashPass });
        await newUser.save();
        console.log('User saved successfully:', newUser);
        
        res.status(201).json({
            message:"User created successfully",
            user:{
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email

            }
        })
        
    }catch(error) {
         alert("Error: " + (err.response ? err.response.data.message : err.message));
        res.status(500).json({message: "Error creating new user"})
    }
};

export const login = async (req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch || !user) {
            return res.status(400).json({message: "Invalid email or password"})
        }else {
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
        }

        
    } catch(error) {
        console.log("error: ", error)
        res.status(500).json({message: "Error logging in user"})
    }
}
