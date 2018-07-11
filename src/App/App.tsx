import * as React from "react";
import { LayoutProps, LayoutPropsTypes } from "./AppProps";
import { LayoutState } from "./AppState";

export class App extends React.Component<LayoutProps, LayoutState> {
    public static readonly propTypes = LayoutPropsTypes;

    public constructor(props) {
        super(props);
        this.state = {
            massage: props.massage
        }
    }
    public render(): JSX.Element {
        return (
            <div>{this.state.massage}</div>
        );
    }
}
