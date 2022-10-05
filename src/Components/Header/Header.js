import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Category from "../Category/Category";
import "./Header.css";

const Header = () => {
  const [categories, seCategories] = useState([]);
  useEffect(() => {
    fetch(" https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => seCategories(data.data.news_category));
  }, []);
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
      <hr className="my-8" />
      <div className="bottom-header ">
        {categories.map((category) => (
          <Category category={category} key={category.category_id} />
        ))}
      </div>
      <div className="totalNewsItem bg-white py-8 rounded mb-10">
        <h3>
          {categories.length} items found{" "}
          {categories.map((category) => category.category_name)} category
        </h3>
      </div>
    </div>
  );
};

export default Header;
