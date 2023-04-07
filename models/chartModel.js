import mongoose from "mongoose"

const chartSchema = new mongoose.Schema(
    {
        date: {type: String, required: false},
        value: {type: String, required: false},
    },
    {
        timestamps: true
    }
)

const Chart = mongoose.model('Chart', chartSchema)
export default Chart