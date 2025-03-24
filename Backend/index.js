import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

import bookRoute from './route/book.route.js'
import userRoute from "./route/user.route.js"
// const cors = require('cors');
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB")
} catch(error) {
    console.log("Error connecting to DB")
}

// defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})