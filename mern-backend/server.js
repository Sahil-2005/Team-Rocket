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
// app.use('/api/payment', paymentRoutes);
app.use(express.json());
app.use('/api/payment', require('./routes/payment'));


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

const projectSchema = new mongoose.Schema({
  title: String,
  region: String,
  zipcode: String,
  reason: String,
  instagramHandle: String,
  description: String,
  totalMoney: Number,
  deadline: Date,
  files: [String], 
  userEmail: String, 
  userName: String 
});

const Project = mongoose.model("Project", projectSchema);

// const donationSchema = new mongoose.Schema({
//   user: {
//     name: String,
//     email: String,
//   },
//   title: String,
//   reason: String,
//   amount: Number,
//   date: { type: Date, default: Date.now },
// });


// Donation model
const donationSchema = new mongoose.Schema({
  user: {
    name: String,
    email: String,
  },
  title: String,
  reason: String,
  amount: Number,
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = { Donation }; // Ensure it is exported properly


// const Donation = mongoose.model("Donation", donationSchema);




app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.get('/api/donations', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ error: 'Failed to fetch donations' });
  }
});




const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, required: true }, // Unique Google ID
  name: String,
  email: { type: String, unique: true, required: true },
  picture: String,
});

const User = mongoose.model("User", userSchema);

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





app.post("/api/projects", upload.array("files"), async (req, res) => {
  try {
    const {
      title, // Extract title
      region,
      zipcode,
      reason,
      instagramHandle,
      description,
      totalMoney,
      deadline,
      userEmail,
      userName,
    } = req.body;

    if (!userEmail || !userName || !title) {
      return res.status(400).json({ error: "All fields including title are required" });
    }

    const files = req.files.map((file) => file.path);

    const newProject = new Project({
      title, // Save title
      region,
      zipcode,
      reason,
      instagramHandle,
      description,
      totalMoney,
      deadline,
      files,
      userEmail,
      userName,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully!" });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
});





app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch projects from the collection
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: 'Failed to fetch projects', error });
  }
});




app.post("/api/auth/google", async (req, res) => {
  const { googleId, name, email, picture } = req.body; // Extract user data

  try {
    // Check if the user already exists
    let user = await User.findOne({ googleId });

    if (!user) {
      // If not, create a new user
      user = new User({ googleId, name, email, picture });
      await user.save();
    }

    res.status(200).json({ message: "User authenticated", user });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
