import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";

import App from "./App.jsx";

import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        // cssVar: true,

        token: {
          colorPrimary: "rgb(200, 16, 46)",

          // Alias Token
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
