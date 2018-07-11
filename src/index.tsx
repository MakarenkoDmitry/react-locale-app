import * as React from "react";
import * as ReactDOM from "react-dom";
import "../style/index.scss";

import { App } from "./App";

ReactDOM.render(
    <App massage="Hello!"/>,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
}
