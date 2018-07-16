import * as React from "react";
import { PrintLocale } from "../Locale"

@PrintLocale("child/")
export class Child extends React.Component<any, any> {
    public render() {
        return <div>{this.props.translate.name}</div>
    }
}
