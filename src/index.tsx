import * as React from "react";
import * as ReactDOM from "react-dom";
import { Locale } from "./Locale";
import { languages } from "./data/Languages";
import "../style/index.scss";

import { App } from "./App";

ReactDOM.render(
    <Locale
        /*defaultLanguage="ru"*/
        /*listLanguages={["ru"]}*/
        languages={languages}
    >
        <App massage="Hello!"/>
    </Locale>,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
}
