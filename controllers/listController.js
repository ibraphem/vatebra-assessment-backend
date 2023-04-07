import List from "../models/listModel.js";


export const lists = async () => {
  try {
    const results = await List.find();
    return {
      status: true,
      message: "Items fecthed succesfully",
      data: results,
    };
  } catch (error) {
    return { status: false, message: "Items fecthed failed", data: error };
  }
};