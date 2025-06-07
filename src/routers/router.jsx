import { createBrowserRouter } from "react-router";

import { PublicRoot, Home, PageNotFound } from "./import";

let router = createBrowserRouter([
  {
    path: "/",
    Component: PublicRoot,
    children: [
      { index: true, Component: Home },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
  // {
  //   path: "*",
  //   Component: PublicRoot,
  //   children: [
  //     {
  //       index: true,
  //       Component: PageNotFound,
  //     },
  //   ],
  // },
]);

export default router;
