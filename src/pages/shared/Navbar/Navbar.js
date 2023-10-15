import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // logout
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us </NavLink>
      </li>
      <li tabIndex="0">
        <NavLink to="/catagories" className="justify-between">
          Catagories
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2">
          <li>
            <NavLink to="/itSupport">Our Support Section</NavLink>
          </li>
          <li>
            <NavLink to="/design">Design and Development</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/tools">tools</NavLink>
      </li>
      <li>
        <NavLink id="home#review" to="/">
          Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>{user && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
      <li className="flex justify-between items-center">
        {user ? (
          <button
            onClick={() => logout()}
            className="btn btn-success btn-xs px-2 py-1 justify-between"
          >
            Log Out
          </button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
      <li>
        <span className=" text-orange-400 font-bold">{user?.displayName}</span>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 font-bold w-full ">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            manufacturer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <FaUserCircle className="w-10 text-3xl" />
            </label>

            <ul
              tabIndex="0"
              className="mt-5 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className="justify-between">
                  profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">Settings</NavLink>
              </li>
              <li>
                <NavLink onClick={() => logout("/")} to="/">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
