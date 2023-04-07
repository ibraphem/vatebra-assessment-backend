import express from "express"
import { tasks, users, charts, locations, lists } from "../mock/data.js";
import Task from "../models/taskModel.js";
import User from "../models/userModel.js";
import Chart from "../models/chartModel.js";
import Location from "../models/locationModel.js";
import List from "../models/listModel.js";

const seedRoutes = express.Router();

seedRoutes.get('/users', async(req, res) => {

    await User.deleteMany()
    const createdUsers = await User.insertMany(users)
    res.send({createdUsers})
})

seedRoutes.get('/tasks', async(req, res) => {
    await Task.deleteMany()
    const createdTasks = await Task.insertMany(tasks)
    res.send({createdTasks})
})

seedRoutes.get('/charts', async(req, res) => {

    await Chart.deleteMany()
    const createdCharts = await Chart.insertMany(charts)
    res.send({createdCharts})
})

seedRoutes.get('/locations', async(req, res) => {
    await Location.deleteMany()
    const createdLocations = await Location.insertMany(locations)
    res.send({createdLocations})
})

seedRoutes.get('/lists', async(req, res) => {
    await List.deleteMany()
    const createdLists = await List.insertMany(lists)
    res.send({createdLists})
})


export default seedRoutes