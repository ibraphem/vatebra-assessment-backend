import Chart from "../models/chartModel.js";


export const charts = async () => {
  try {
    const results = await Chart.find();
    return {
      status: true,
      message: "Items fecthed succesfully",
      data: results,
    };
  } catch (error) {
    return { status: false, message: "Items fecthed failed", data: error };
  }
};