import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleNews from "../SingleNews/SingleNews";

const AllNews = () => {
  let allCategoryNews = useLoaderData();
  allCategoryNews = allCategoryNews.data;
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    setAllNews(allCategoryNews);
  }, [allCategoryNews]);
  return (
    <div>
      {allNews.map((news) => (
        <SingleNews news={news} key={news._id} />
      ))}
    </div>
  );
};

export default AllNews;
