import { Schema, model } from "mongoose";

const attendanceSchema = new Schema(
  {
    studentId: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    date: {
      type: String,
    },
    present: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    attendance: {
      type: [
        {
          type: Schema.Types.ObjectId,
        },
      ],
      ref: "Attendance",
    },
  },
  { timestamps: true }
);

export const Student = model("Student", studentSchema);
export const Attendance = model("Attendance", attendanceSchema);
