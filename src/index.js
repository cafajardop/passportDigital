import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import PassportApp from "./PassportApp";

ReactDOM.render(
    <React.StrictMode>
        <PassportApp />
    </React.StrictMode>,
document.getElementById("root"));

serviceWorkerRegistration.register();

reportWebVitals();
