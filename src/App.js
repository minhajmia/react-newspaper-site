import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Routes from "./Layout/Routes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes />,
      children: [
        { path: "news", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "blog", element: <Blog /> },
      ],
    },
  ]);
  return (
    <div className="mx-20">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
