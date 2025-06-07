import React from "react";

export const PublicRoot = React.lazy(() => import("@/layouts/PublicLayout"));
export const Home = React.lazy(() => import("@/pages/Home"));
export const PageNotFound = React.lazy(() => import("@/pages/404"));
