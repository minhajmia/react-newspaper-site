import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Routes from "./Layout/Routes";
import AllNews from "./Components/AllNews/AllNews";
import SingleNews from "./Components/SingleNews/SingleNews";
import Header from "./Components/Header/Header";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        { path: "news", element: <SingleNews /> },
        { path: "home", element: <SingleNews /> },
        { path: "blog", element: <Blog /> },
        {
          path: "/category/:categoryID",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/news/category/${params.categoryID}`
            );
          },
          element: <AllNews />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <div className="mx-20">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
