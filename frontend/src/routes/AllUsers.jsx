import { useEffect, useState } from "react";
import { Sidebar } from "../components";
import axios from "axios";

export default function AllUsers() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/allusers"
        );
        setPeople(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPeople();
  }, [people]);

  const deleteUser = async (e) => {
    e.preventDefault();
    const userId = e.target.id;
    try {
      await axios.post("http://localhost:8000/api/v1/users/deleteuser", {
        userId,
      });
      alert("User deleted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container flex">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">All Users</h2>
          </div>
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
                        Action
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
                          <button
                            id={person._id}
                            type="button"
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                            onClick={deleteUser}
                          >
                            Delete
                          </button>
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
