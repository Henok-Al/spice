import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // State for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // navList Data
  const navList = (
    <ul
      className={`flex flex-col space-y-3 text-white font-medium text-md px-5 ${
        isOpen ? "block" : "hidden"
      } lg:flex lg:flex-row lg:space-x-3 lg:space-y-0`}
    >
      {/* Home */}
      <li>
        <Link to={"/"} onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"} onClick={() => setIsOpen(false)}>
          All Product
        </Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"} onClick={() => setIsOpen(false)}>
            Signup
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/login"} onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"} onClick={() => setIsOpen(false)}>
            User
          </Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} onClick={() => setIsOpen(false)}>
            Admin
          </Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li
          className=" cursor-pointer"
          onClick={() => {
            logout();
            setIsOpen(false);
          }}
        >
          logout
        </li>
      )}

      {/* Cart */}
      <li>
        <Link to={"/cart"} onClick={() => setIsOpen(false)}>
          Cart({cartItems.length})
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-orange-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              YebaleSpices
            </h2>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden absolute top-4 right-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* right  */}
        <div
          className={`right flex flex-col items-center mt-4 lg:mt-0 lg:flex-row lg:justify-center lg:space-x-3 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          {navList}
        </div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
