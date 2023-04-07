import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    age: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);
export default List;
