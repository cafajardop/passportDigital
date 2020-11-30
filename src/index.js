import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { PassportApp } from "./PassportApp";

ReactDOM.render(
<PassportApp />, 
document.getElementById("root"));

serviceWorkerRegistration.register();

reportWebVitals();
