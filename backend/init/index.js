const mongoose = require("mongoose");
const initData = require("./data.js");
const Project = require("../model/projects.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/portfolio";

main()
    .then(() =>{
        console.log("connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Project.insertMany(initData.data);
    console.log("Data initialized successfully");
}

initDB();