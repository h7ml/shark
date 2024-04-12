import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
  parent: "#root",
});
