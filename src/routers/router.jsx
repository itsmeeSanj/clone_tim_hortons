import { createBrowserRouter } from "react-router";
import { Home } from "./import";

let router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      //   { path: "about", Component: About },
    ],
  },
  {
    path: "*",
    Component: () => <div>Oops! 404</div>,
  },
]);

export default router;
