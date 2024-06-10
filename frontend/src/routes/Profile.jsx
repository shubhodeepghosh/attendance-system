import { useEffect, useState } from "react";
import { Sidebar } from "../components";
import axios from "axios";

export default function Profile() {
  const [people, setPeople] = useState([]);
  const userId = localStorage.getItem("token");

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/v1/users/currentuser", { userId })
      .then((res) => setPeople(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="container flex">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl px-5 py-10">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <div className="h-64 w-full rounded object-cover lg:h-48 lg:w-48 flex items-center justify-center bg-blue-900">
            <span className="font-semibold text-white text-9xl">
              {people.role === "student" ? "🧑🏽‍🎓" : "🧑‍🏫"}
            </span>
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {people.role}🚀
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {people.name}
            </h1>
            <p className="leading-relaxed">Email - {people.email}</p>
            {people.role === "teacher" && (
              <p className="leading-relaxed">Teacher Id - {people.teacherId}</p>
            )}

            {people.role === "student" && (
              <div>
                <p className="leading-relaxed">
                  Roll Number - {people.rollNumber}
                </p>
                <p className="leading-relaxed">Semester - {people.semester}</p>
                <p className="leading-relaxed">
                  Attendance -{" "}
                  {people.attendance ? people.attendance.length : "0"}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
