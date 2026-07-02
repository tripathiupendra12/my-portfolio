if(process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");


const Project = require("./model/projects.js");

// Ensure uploads folder exists
// const uploadPath = path.join(__dirname, "uploads");

// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath);
// }

// Multer Storage (clean)
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadPath);
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });
const {storage} = require("./cloudConfig.js")

const upload = multer({ storage });

//  Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder (IMPORTANT)
// app.use("/uploads", express.static(uploadPath));

//  MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/portfolio";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(" Connected to DB"))
  .catch((err) => console.log(err));

// GET all projects
app.get("/project", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  CREATE project
app.post("/newProject", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      image: {
        url: req.file.path,
        filename: req.file.filename,
      },
      demoUrl: req.body.demoUrl,
      gitHubUrl: req.body.gitHubUrl,
    });

    await newProject.save();

    res.json({
      success: true,
      message: "New Project Added",
      project: newProject,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

//  DELETE project
app.delete("/project/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Project Deleted!",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  Server
app.listen(8080, () => {
  console.log(" Server running at port 8080");
});