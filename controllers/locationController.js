import Location from "../models/locationModel.js";


export const locations = async () => {
  try {
    const results = await Location.find();
    return {
      status: true,
      message: "Items fecthed succesfully",
      data: results[0],
    };
  } catch (error) {
    return { status: false, message: "Items fecthed failed", data: error };
  }
};