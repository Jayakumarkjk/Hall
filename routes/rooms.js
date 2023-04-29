import express from "express";
import Room from "../models/Room.js";
import BookingRoom from "../models/BookingRoom.js"
const router = express.Router();
router.use(express.json());


router.post("/", async(req, res)=>{

    const newRoom = new Room(req.body)
    
    try{
    const savedRoom = await newRoom.save()
    res.status(200).json(savedRoom);
    }catch(err){
        res.status(500).json(err);
    }
    });
    
router.put("/:id", async(req, res)=>{
        
    try{
    const updatedRoom = await Room.findByIdAndUpdate(
    req.params.id, 
    { $set: req.body},
    {new: true}
    );
    res.status(200).json(updatedRoom);
    }catch(err){
    res.status(500).json(err);
    }
    });
    
    
router.delete("/:id", async(req, res)=>{
        
    try{
    await Room.findByIdAndDelete(
    req.params.id
    );
    res.status(200).json("Room has been deleted succesfully");
    }catch(err){
    res.status(500).json(err);
    }
    });
            
    
            
router.get("/:id", async(req, res)=>{
        
    try{
    const room = await Room.findById(
    req.params.id 
    );
    res.status(200).json(room);
    }catch(err){
    res.status(500).json(err);
    }
    });
            
router.get("/", async(req, res)=>{
        
    try{
    const rooms = await Room.find();
    res.status(200).json(rooms);
    }catch(err){
    res.status(500).json(err);
    }
    });
                

                    
router.post("/book", async(req, res)=>{

    const newBookingRoom = new BookingRoom(req.body)
                        
    try{
    const savedBookingRoom = await newBookingRoom.save()
    res.status(200).json(savedBookingRoom);
    }catch(err){
    res.status(500).json(err);
    }
    });
        
router.get("/booked", async(req, res)=>{

                        
    try{
    const bookedRoom = await BookingRoom.find()
    res.status(200).json(bookedRoom);
    }catch(err){
    res.status(500).json(err);
    }
    });
            

export default router;