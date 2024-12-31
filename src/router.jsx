import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayOut from "./Layout";
import PageHome from "./PageHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
    ],
  },
]);

export default router;
