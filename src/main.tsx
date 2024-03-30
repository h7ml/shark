import "@/App.css";
import "@/index.css";
import "nprogress/nprogress.css";
import "@/mock";

import NProgress from "nprogress";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App.tsx";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  parent: "#root",
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
