const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const paymentRoutes = require('./routes/payment');
const app = express();

// Middleware
app.use(cors());
app.use('/api/payment', paymentRoutes);

app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/fundraising", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Mongoose Schema and Model
const projectSchema = new mongoose.Schema({
  region: { type: String, required: true },
  zipcode: { type: String, required: true },
  reason: { type: String, required: true },
  instagramHandle: { type: String, required: true },
  description: { type: String, required: true },
  totalMoney: { type: Number, required: true },
  deadline: { type: Date, required: true },
  files: { type: [String], required: true }, // Array of file paths
});

const Project = mongoose.model("Project", projectSchema);

// Multer Setup for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// API Endpoint to Handle Form Submissions
app.post("/api/projects", upload.array("files"), async (req, res) => {
  try {
    const { region, zipcode, reason, instagramHandle, description, totalMoney, deadline } =
      req.body;

    const files = req.files.map((file) => file.path); // Save file paths

    const newProject = new Project({
      region,
      zipcode,
      reason,
      instagramHandle,
      description,
      totalMoney,
      deadline,
      files,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create project" });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
