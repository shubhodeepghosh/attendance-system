import ReactDOM from "react-dom/client";
import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  Root,
  Home,
  Error,
  Login,
  Signup,
  AddStudent,
  Profile,
  Students,
  Teachers,
  AllUsers,
} from "./routes";

import "./index.css";
import Attendance from "./routes/Attendance";
import MySubjects from "./routes/MySubjects";
import Schedule from "./routes/Schedule";
import AddTeacher from "./routes/AddTeacher";

const isAdmin = function () {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role === "admin") {
    return true;
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="addstudent" element={<AddStudent />} />
      <Route path="profile" element={<Profile />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="students" element={<Students />} />
      <Route path="teachers" element={<Teachers />} />
      {isAdmin && <Route path="addteacher" element={<AddTeacher />} />}
      {isAdmin && <Route path="allusers" element={<AllUsers />} />}
      <Route path="mysubjects" element={<MySubjects />} />
      <Route path="schedule" element={<Schedule />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
