// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, HashRouter } from "react-router-dom";

// const Router =
//   process.env.NODE_ENV === "production" ? HashRouter : BrowserRouter;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Router basename="/media-fusion-portfolio">
//       <App />
//     </Router>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";

const isProduction = process.env.NODE_ENV === "production";
const Router = isProduction ? HashRouter : BrowserRouter;
const basename = isProduction ? "" : "/media-fusion-portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
