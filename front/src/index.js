import React from "react";
import ReactDOM from "react-dom/client";
import "./css/project1.min.css";
import AppRoutes from "./routes/appRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("root").style.width = "100%";
document.getElementById("root").style.height = "100%";

root.render(<AppRoutes />);
