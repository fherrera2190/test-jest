import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
// import { FirtsApp as FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola soy Goku" subTitle={1232134} /> */}
    <CounterApp value={0} />
  </React.StrictMode>
);
