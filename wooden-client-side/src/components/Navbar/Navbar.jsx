import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav className="grid grid-cols-1 lg:grid-cols-3 justify-items-center container mx-auto p-6 gap-5 sticky">
        {/* brand logo here */}
        <div className="flex items-center justify-center lg:justify-start lg:mr-36 space-x-4">
          {/* <img src="logo" alt="brand logo" /> */}
          <span className="text-2xl">Wooden</span>
        </div>
        <ul className=" col-span-2 flex flex-col lg:flex-row space-x-8 items-center justify-center navContainer">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4d4d4d]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allArtAndCraftItems"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4d4d4d]" : ""
              }
            >
              All Art & craft Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addArtAndCraftItem"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4d4d4d]" : ""
              }
            >
              Add Art & Craft item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myArtCarftList"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4d4d4d]" : ""
              }
            >
              My Art & Craft List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4d4d4d]" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#4d4d4d]" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
