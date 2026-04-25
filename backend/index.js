import express from "express";
import dotenv from "dotenv";    
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

app.get("/Home", (req, res) => {
    return res.status(200).json({
        message : "I am coming from backend",
        sucess: true,
    })
})

const PORT = process.env.PORT || 3000;

const coreOption = {
    origin : "http://localhost:5173",
    Credential : true,
}

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(coreOption));
app.use(cookieParser());

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
