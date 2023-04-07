import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        date: {type: String, required: true},
        todo: {type: String, required: true},
        category: {type: String, required: false, default: "todo"},
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model('Task', taskSchema)
export default Task