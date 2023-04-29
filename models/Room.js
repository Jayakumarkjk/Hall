import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
    {
        roomNo: {
            type: String,
            required: true,
            unique:true,
        },

        hourlyPrice: {
            type: String,
            required: true,
            unique:true,
        },

        maxPeople: {
            type: String,
            required: true,
        },

        amenities: {
            type: String,
        },

        roomNumbers: [{ number : Number, unavailableDates: { type: [Date] } }],
 },
    { timestamps: true }
);

[
    {number:101, unavailableDates:["10.05.2023, 10.05.2023"]},
    {number:102, unavailableDates:["10.05.2023, 10.05.2023"]},
    {number:103, unavailableDates:[]},
    {number:104, unavailableDates:[]},
    {number:105, unavailableDates:[]}
]

export default mongoose.model ("Room", RoomSchema);