import mongoose from "mongoose";

const BookingRoomSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true,
            unique:true,
        },

        date: {
            type: String,
            required: true,
            unique:true,
        },

        startTime: {
            type: String,
            required: true,
        },

        endTime: {
            type: String,
        },

        bookedStatus: {
            type: Boolean,
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

export default mongoose.model ("BookingRoom", BookingRoomSchema);