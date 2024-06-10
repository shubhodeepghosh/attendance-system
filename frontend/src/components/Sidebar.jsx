import {
  Users,
  Wallet,
  Newspaper,
  BookOpen,
  Paperclip,
  Wrench,
  SquareUserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5">
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <p className="px-3 text-xs font-semibold uppercase text-purple-950">
              analytics
            </p>
            {role !== "student" && (
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="/attendance"
              >
                <Wallet className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium text-fuchsia-950">
                  Attendance
                </span>
              </Link>
            )}

            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/profile"
            >
              <SquareUserRound className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium text-fuchsia-950">
                Profile
              </span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <p className="px-3 text-xs font-semibold uppercase text-purple-950">
              content
            </p>
            {role !== "student" && (
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="/students"
              >
                <Newspaper className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium text-fuchsia-950">
                  Students
                </span>
              </Link>
            )}
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/teachers"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium text-fuchsia-950">
                Teachers
              </span>
            </Link>
            {role == "admin" && (
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="/allusers"
              >
                <Paperclip className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium text-fuchsia-950">
                  All Users
                </span>
              </Link>
            )}
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/mysubjects"
            >
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium text-fuchsia-950">
                My Subjects
              </span>
            </Link>
          </div>

          {role == "admin" && (
            <div className="space-y-3 ">
              <p className="px-3 text-xs font-semibold uppercase text-purple-950">
                Customization
              </p>
              <Link
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                to="#"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium text-fuchsia-950">
                  Setting
                </span>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
}
