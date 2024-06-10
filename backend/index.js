import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Student, Attendance } from "./models/student.models.js";
import { Teacher } from "./models/teacher.models.js";
import moment from "moment/moment.js";
import { Admin } from "./models/admin.models.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// api routes

// create teachers endpoint
app.post("/api/v1/teachers/register", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// create students endpoint
app.post("/api/v1/students/register", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// student attendance endpoint
app.post("/api/v1/students/attendance", async (req, res) => {
  try {
    const { studentId } = req.body;

    // Find the student by ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const haveAttendance = await Attendance.findOne({
      studentId,
      date: moment().format("MMM Do YY"),
    });

    if (!haveAttendance) {
      const attendance = new Attendance({
        studentId,
        date: moment().format("MMM Do YY"),
        present: true,
      });
      const savedAttendance = await attendance.save();
      student.attendance.push(savedAttendance._id);
      await student.save();
      res.status(200).json("success");
    } else {
      haveAttendance.present = true;
      await haveAttendance.save();
      res.status(200).json("success");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// get current user
app.post("/api/v1/users/currentuser", async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the user by ID
    const user =
      (await Student.findById(userId)) ||
      (await Teacher.findById(userId)) ||
      (await Admin.findById(userId));

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// get allusers endpoint
app.get("/api/v1/users/allusers", async (req, res) => {
  try {
    const students = await Student.find({});
    const teachers = await Teacher.find({});
    const allUsers = [...students, ...teachers];
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get students endpoint
app.get("/api/v1/students/allstudents", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get teachers endpoint
app.get("/api/v1/teachers/allteachers", async (req, res) => {
  try {
    const teacher = await Teacher.find({});
    res.status(200).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// create login endpoint
app.post("/api/v1/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user =
      (await Student.findOne({ email, password })) ||
      (await Teacher.findOne({ email, password })) ||
      (await Admin.findOne({ email, password }));

    res.status(200).json({
      userId: user._id,
      success: true,
      message: "Login successful",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// delete user endpoint
app.post("/api/v1/users/deleteuser", async (req, res) => {
  try {
    const { userId } = req.body;

    // Find the user by ID
    const user =
      (await Student.findByIdAndDelete(userId)) ||
      (await Teacher.findByIdAndDelete(userId)) ||
      (await Admin.findByIdAndDelete(userId));

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
