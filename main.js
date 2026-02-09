// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./src/App";


// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );

// root.render(<App />);




import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);


