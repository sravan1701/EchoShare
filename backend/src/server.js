import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import cookieparser from "cookie-parser"

import cors from "cors"

import path from "path";

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.Route.js';
import chatRoutes from './routes/chat.route.js';

import { connectDB } from './lib/DB.js';

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname=path.resolve();


app.use(cors({
    origin:"http://localhost:5173", //frontend localhost (CORS (Cross-Origin Resource Sharing) in Node.js
    //  is a security mechanism that allows web applications running at one origin (domain, protocol, and port) 
    // to make requests for resources from a different origin. )
    
    credentials:true //allow frontend cookies to send cookies
}))


// Middleware that parses incoming requests with JSON payloads
// and makes the parsed data available in req.body
//if this middleware is not used, req.body will be undefined
app.use(express.json());
app.use(cookieparser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/chat",chatRoutes);

if(process.env.NODE_ENV=== "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })

}

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})