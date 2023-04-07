import Task from "../models/taskModel.js";


export const tasks = async () => {
  try {
    const results = await Task.find();
    return {
      status: true,
      message: "Items fecthed succesfully",
      data: results,
    };
  } catch (error) {
    return { status: false, message: "Items fecthed failed", data: error };
  }
};

export const addTask = async (payload) => {
  const newTask = new Task({
    date: payload.date,
    todo: payload.todo,
  });
  try {
    const task = await newTask.save();
    return { status: true, message: "Task saved succesfully", data: task };
  } catch (error) {
    return { status: false, message: "Task did not save successfully", data: error };
  }
};