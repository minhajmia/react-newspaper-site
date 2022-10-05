import React from "react";
import SingleNews from "../SingleNews/SingleNews";

const Home = ({ news }) => {
  console.log(typeof news);
  return (
    <div>
      <SingleNews />
    </div>
  );
};

export default Home;
