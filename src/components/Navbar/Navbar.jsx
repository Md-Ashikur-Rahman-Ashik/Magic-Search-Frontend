import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import "./Navbar.css";

const Navbar = () => {
  const { signOutUser, user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User logout successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navLinks = (
    <>
      <li id="homeActive">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li id="productActive">
        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Products
        </NavLink>
      </li>
      {!user && (
        <li id="loginActive">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
        </li>
      )}
      {user && (
        <ul className="lg:flex lg:justify-center lg:items-center lg:gap-2 lg:text-white">
          <li className="lg:text-center list-none lg:text-white font-bold">
            <span>{user?.displayName}</span>
          </li>
          <li>
            <Link
              className="lg:flex bg-[#007bff] lg:justify-center rounded-xl btn-ghost font-bold text-white"
              onClick={handleSignOut}
            >
              Log Out
            </Link>
          </li>
        </ul>
      )}
    </>
  );

  return (
    <div className="bg-[#0D0D0D]">
      <div className="navbar  container p-2 mx-auto">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="text-black max-w-min">
            <div className="flex items-center">
              <img
                className="rounded-xl w-1/2 bg-white"
                src="/logo.png"
                alt="Website logo"
              />
              <Link
                to={"/"}
                className="btn text-white btn-ghost text-xl font-bold"
              >
                Magic Search
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-white font-bold px-1">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
