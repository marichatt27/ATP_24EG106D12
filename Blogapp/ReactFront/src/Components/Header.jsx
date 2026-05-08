import React from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

function Header() {
  const { isAuthenticated, logout } = useAuth((state) => state);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-blue-950/90 border-b border-blue-800 shadow-2xl">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO SECTION */}
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl shadow-lg">
            ✨
          </div>

          <div>
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              BlogSphere
            </h1>

            <p className="text-blue-200 text-sm">
              Share ideas. Inspire people.
            </p>
          </div>

        </div>

        {/* NAVBAR */}
        <ul className="flex items-center gap-8 text-lg font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition duration-300 hover:text-cyan-300 relative
                ${isActive ? "text-cyan-300" : "text-white"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Register"
              className={({ isActive }) =>
                `transition duration-300 hover:text-cyan-300
                ${isActive ? "text-cyan-300" : "text-white"}`
              }
            >
              Register
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li>
              <NavLink
                to="/Login"
                onClick={handleLogout}
                className="bg-linear-to-r from-red-500 to-pink-500 px-5 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-red-500/40 transition duration-300"
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to="/Login"
                className="bg-linear-to-r from-cyan-400 to-blue-500 px-5 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300"
              >
                Login
              </NavLink>
            </li>
          )}

        </ul>
      </div>
    </header>
  );
}

export default Header;