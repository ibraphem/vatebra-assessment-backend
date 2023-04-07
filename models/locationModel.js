import mongoose from "mongoose"

const locationSchema = new mongoose.Schema(
    {
        lat: {type: String, required: false},
        lng: {type: String, required: false},
        lng: {type: String, required: false},
    },
    {
        timestamps: true
    }
)

const Location = mongoose.model('Location', locationSchema)
export default Location