import * as React from "react";
import {LocaleContext} from "../LocaleComponent/LocaleContext";

export const PrintLocale = (path) => (Component: any) =>
    class LocaleWrap extends React.Component {
        constructor(props) {
            super(props);

            this.setPath = this.setPath.bind(this);
        }

        public render() {
            return (
                <LocaleContext.Consumer>
                    {
                        (value) =>
                            <div>
                                <Component
                                    languages={value}
                                    translate={this.setPath(path, value.languages[value.language])}
                                />
                            </div>
                    }
                </LocaleContext.Consumer>
            );
        }

        private setPath(pathProps, data) {
            if (pathProps === "/" || pathProps === "") { return data };
            try {
                let paths = pathProps.match(/\w+\//)[0];
                paths = paths.slice(0, paths.length - 1);
                const nextPaths = pathProps.slice(paths.length + 1);
                return this.setPath(nextPaths, data[paths]);
            } catch (e) {
                throw new Error("Wrong path to translation");
            }
        }
    };
