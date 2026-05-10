import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Proviter/AuthProviders";

const NavBer = () => {
  const [theme, setTheme] = useState("light");

  const { user, LogOut, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document
      .querySelector("html")
      .setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
    );
  }

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-500 transition-all duration-300 hover:scale-110"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/products"
          className="text-gray-700 hover:text-pink-500 transition-all duration-300 hover:scale-110"
        >
          Products
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 px-4 lg:px-10 py-4 bg-gradient-to-r from-orange-50 via-white to-orange-100 backdrop-blur-lg shadow-lg border-b border-gray-200">

      {/* LEFT */}
      <div className="navbar-start">

        {/* MOBILE MENU */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-2xl w-52 border border-gray-200"
          >
            {navItems}
          </ul>
        </div>

        {/* LOGO */}
        <h2 className="text-3xl font-extrabold tracking-wide cursor-pointer">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Product
          </span>{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Hunt
          </span>
        </h2>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 text-lg font-semibold">
          {navItems}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        {/* THEME TOGGLE */}
        <label className="swap swap-rotate">

          {/* hidden checkbox */}
          <input
            onChange={handleToggle}
            type="checkbox"
            className="hidden"
          />

          {/* SUN ICON */}
          <svg
            className="swap-off h-8 w-8 fill-current text-yellow-400 cursor-pointer transition-all duration-500 hover:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17l-.71.71a1 1 0 001.41 1.41l.71-.71A1 1 0 005.64 17zm-1.64-5a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm8-7a1 1 0 001-1V3a1 1 0 00-2 0v1a1 1 0 001 1zm6.36 2.05a1 1 0 001.41 0l.71-.71a1 1 0 10-1.41-1.41l-.71.71a1 1 0 000 1.41zM20 11h-1a1 1 0 000 2h1a1 1 0 000-2zm-8 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm6.36-1.64a1 1 0 00-1.41 0 1 1 0 000 1.41l.71.71a1 1 0 001.41-1.41zM6.34 6.34A1 1 0 104.93 4.93l-.71.71a1 1 0 101.41 1.41zM12 6.5A5.5 5.5 0 1017.5 12 5.5 5.5 0 0012 6.5zm0 9A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z" />
          </svg>

          {/* MOON ICON */}
          <svg
            className="swap-on h-8 w-8 fill-current text-blue-500 cursor-pointer transition-all duration-500 hover:-rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
          </svg>

        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar hover:scale-110 transition duration-300"
            >
              <div className="w-11 rounded-full ring ring-blue-400 ring-offset-2 ring-offset-white">
                <img src={user.photoURL} alt="" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-2xl bg-white rounded-2xl w-60 text-gray-700 border border-gray-200"
            >
              <li className="font-bold text-blue-500">
                {user.displayName}
              </li>

              <li className="border-b border-gray-200 pb-2 mb-2 text-sm">
                {user.email}
              </li>

              <li>
                <Link
                  to="dashboard"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Dashboard
                </Link>
              </li>

              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className="btn btn-error btn-sm text-white hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-gradient-to-r from-blue-500 to-cyan-400 border-0 text-white rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBer;