import express from "express";
import Hall from "../models/Hall.js";
const router = express.Router();
router.use(express.json());

router.post("/", async(req, res)=>{

const newHall = new Hall(req.body)

try{
const savedHall = await newHall.save()
res.status(200).json(savedHall);
}catch(err){
    res.status(500).json(err);
}
});

router.put("/:id", async(req, res)=>{
    
    try{
    const updatedHall = await Hall.findByIdAndUpdate(
        req.params.id, 
        { $set: req.body},
        {new: true}
        );
    res.status(200).json(updatedHall);
    }catch(err){
        res.status(500).json(err);
    }
    });


    router.delete("/:id", async(req, res)=>{
    
        try{
            await Hall.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Hall deleted succesfully");
        }catch(err){
            res.status(500).json(err);
        }
        });
        

        
        router.get("/:id", async(req, res)=>{
    
            try{
            const hall = await Hall.findById(
                req.params.id 
                );
            res.status(200).json(hall);
            }catch(err){
                res.status(500).json(err);
            }
            });
        
            router.get("/", async(req, res)=>{
    
                try{
                const halls = await Hall.find();
                res.status(200).json(halls);
                }catch(err){
                    res.status(500).json(err);
                }
                });
            
        
    

export default router;
