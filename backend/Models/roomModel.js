
import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,

        required: true
    },
    taken: {
        type: Boolean,
        default: false
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    type: {
        type: String,

        required: true
    },
    description: {
        type: String,

    },
    images: [{
        type: String,
        required: false,
    }],
    price: {
        type: Number,
        required: false
    },
}, {
    timestamp: true,
});


export default mongoose.model('Room', roomSchema);;