import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Images from "../assets/images";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const role = localStorage.getItem("role");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post("http://localhost:8000/api/v1/users/login", formData)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.userId);
          navigate("/profile");
          setIsLoading(false);
        }
      })
      .catch(() => {
        alert("Error", "Email or password is incorrect");
        setIsLoading(false);
      });
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-purple-950 sm:text-4xl">
              Log in
            </h2>

            {role !== "admin" && (
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  to="/signup"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <NavLink
                      to="/signup"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </NavLink>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {!isLoading ? "Get started" : "Loading..."}{" "}
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
            src={Images.LoginBanner}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
