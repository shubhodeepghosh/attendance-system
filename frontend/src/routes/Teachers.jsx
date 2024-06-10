import { useEffect, useState } from "react";
import { Sidebar } from "../components";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Teachers() {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/teachers/allteachers"
        );
        console.log(response.data);
        setPeople(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPeople();
  }, []);

  return (
    <div className="container flex">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">All Teachers</h2>
          </div>

          {role === "admin" && (
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
              onClick={() => navigate("/addteacher")}
            >
              Add teachers
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          )}
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>User</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Teacher Id
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-violet-900 flex justify-center items-center">
                                <span className="text-white font-bold">
                                  {person.name.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-700">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {person.role.toUpperCase()}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {person.teacherId}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
