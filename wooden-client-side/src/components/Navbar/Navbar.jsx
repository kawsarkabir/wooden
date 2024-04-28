import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto p-6">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="flex justify-between items-center">
          <button className="hamburger-menu lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <div className="flex items-center gap-x-1 lg:hidden">
            <img src="https://i.ibb.co/VH724v1/download.png" alt="" />
            <div className="mt-2">
              <span className="cart-products-count font-bold">0</span>
              <span className="cart-products-text font-bold ml-1">item - </span>
              <span className="cart-products-total text-[#666]">$0.00</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-x-6">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/allArtAndCraftItems" activeClassName="active">
            All Art & Craft Items
          </NavLink>
          <NavLink to="/addArtAndCraftItem" activeClassName="active">
            Add Art & Craft item
          </NavLink>
          <NavLink to="/myArtCarftList" activeClassName="active">
            My Art & Craft List
          </NavLink>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </div>
      </div>
      <div
        className={`drawer lg:hidden ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allArtAndCraftItems" activeClassName="active">
              All Art & Craft Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/addArtAndCraftItem" activeClassName="active">
              Add Art & Craft item
            </NavLink>
          </li>
          <li>
            <NavLink to="/myArtCarftList" activeClassName="active">
              My Art & Craft List
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="active">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
