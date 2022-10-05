import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="top-header flex justify-between  mt-5">
        <div className="top-header-left flex justify-between items-center">
          <NavLink
            className={`mr-3 font-bold ${({ isActive }) =>
              isActive ? "active" : "undefined"}`}
            to="news"
          >
            News
          </NavLink>
          <h2 className="font-bold">BD</h2>
        </div>
        <div className="top-header-right flex justify-between items-center">
          <NavLink className="mr-3 font-semibold" to="home">
            Home
          </NavLink>
          <NavLink to="blog" className="font-semibold">
            Blog
          </NavLink>
        </div>
      </div>
      <div className="bottom-header ">
        <h2>bottom header</h2>
      </div>
    </div>
  );
};

export default Header;
