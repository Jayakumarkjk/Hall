import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { MongoClient } from "mongodb"
// import authRoute from "./routes/auth.js"
import hallsRoute from "./routes/halls.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"

const app = express();
dotenv.config()
const PORT = 8000;


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to MongoDB")
    } catch (error) {
        throw error;
    }
};


mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})


// const MONGO_URL = "mongodb://127.0.0.1:27017/hallbooking";



// async function createConnection(){
//     const client = new MongoClient(process.env.MONGO_URL);
//     await client.connect();
//     console.log("Connected to MongoDB");
//     // const db = client.db;
//     return client;
// }

// app.get("/", (req, res)=> {
//     res.send ("Hello")
// })

// const client = await createConnection();



app.use(express.json())

// app.use("/auth", authRoute);
app.use("/halls", hallsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);



app.listen(PORT, () => {
connect()
    console.log ("Server started on PORT");
});