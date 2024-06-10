import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../assets/images";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [isLoading, setIsloading] = useState(false);

  const [teacherData, setTeacherData] = useState({
    teacherId: "",
    name: "",
    email: "",
    role: role,
    password: "",
  });

  const [studentData, setStudentData] = useState({
    name: "",
    rollNumber: "",
    semester: "",
    email: "",
    role: role,
    password: "",
  });

  const registerWithEmail = async (e) => {
    e.preventDefault();
    if (role == "teacher") {
      // teacher register
      setIsloading(true);

      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/teachers/register",
          teacherData
        );

        console.log(res);
        setIsloading(false);
        navigate("/login");
      } catch (error) {
        console.log("Error :: register teacher", error);
      }
    } else {
      // student register
      setIsloading(true);

      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/students/register",
          studentData
        );

        console.log(res);
        setIsloading(false);
        navigate("/login");
      } catch (error) {
        console.log("Error :: register students", error);
      }
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-purple-950 sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-fuchsia-1000">
              Already have an account?{" "}
              <Link
                to="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Log In
              </Link>
            </p>
            <form className="mt-8" onSubmit={registerWithEmail}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      name="name"
                      value={
                        role == "teacher" ? teacherData.name : studentData.name
                      }
                      onChange={
                        role == "teacher"
                          ? (e) =>
                              setTeacherData({
                                ...teacherData,
                                name: e.target.value,
                              })
                          : (e) =>
                              setStudentData({
                                ...studentData,
                                name: e.target.value,
                              })
                      }
                    ></input>
                  </div>
                </div>

                {role == "teacher" && (
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Teacher Id{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Teacher Id"
                        id="teacherid"
                        name="teacherid"
                        value={teacherData.teacherId}
                        onChange={(e) =>
                          setTeacherData({
                            ...teacherData,
                            teacherId: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                )}

                {role == "student" && (
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Roll Number{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Roll Number"
                        id="rollnumber"
                        name="rollnumber"
                        value={studentData.rollNumber}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            rollNumber: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                )}

                {role == "student" && (
                  <div>
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-gray-900"
                    >
                      Semester{" "}
                      <span className="text-sm text-zinc-500">
                        (like : 1st, 2nd, 3rd, 4th, 5th, 6th)
                      </span>
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Semester"
                        id="semester"
                        name="semester"
                        value={studentData.semester}
                        onChange={(e) =>
                          setStudentData({
                            ...studentData,
                            semester: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={
                        role == "teacher"
                          ? teacherData.email
                          : studentData.email
                      }
                      onChange={
                        role == "teacher"
                          ? (e) =>
                              setTeacherData({
                                ...teacherData,
                                email: e.target.value,
                              })
                          : (e) =>
                              setStudentData({
                                ...studentData,
                                email: e.target.value,
                              })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={
                        role == "teacher"
                          ? teacherData.password
                          : studentData.password
                      }
                      onChange={
                        role == "teacher"
                          ? (e) =>
                              setTeacherData({
                                ...teacherData,
                                password: e.target.value,
                              })
                          : (e) =>
                              setStudentData({
                                ...studentData,
                                password: e.target.value,
                              })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {!isLoading ? "Create Account" : "Loading..."}
                    {!isLoading && <ArrowRight className="ml-2" size={16} />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src={Images.SignupBanner}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
