import { Sidebar } from "../components";
import axios from "axios";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

function AddStudent() {
  const [isLoading, setIsloading] = useState(false);

  const [studentData, setStudentData] = useState({
    name: "",
    rollNumber: "",
    semester: "",
    email: "",
    role: "student",
    password: "",
  });

  const registerWithEmail = async (e) => {
    e.preventDefault();

    // student register
    setIsloading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/students/register",
        studentData
      );

      console.log(res);
      setIsloading(false);

      // reset all data
      (() => {
        setStudentData({
          name: "",
          rollNumber: "",
          semester: "",
          email: "",
          role: "",
          password: "",
        });
      })();

      alert("Student Registered Successfully");
    } catch (error) {
      console.log("Error :: register students", error);
    }
  };
  return (
    <div className="container flex">
      <Sidebar />
      <form className="mt-8 w-full px-5 m-auto" onSubmit={registerWithEmail}>
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
                value={studentData.name}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    name: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>

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
                value={studentData.email}
                onChange={(e) =>
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
                value={studentData.password}
                onChange={(e) =>
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
              {!isLoading ? "Add student" : "Loading..."}
              {!isLoading && <ArrowRight className="ml-2" size={16} />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
