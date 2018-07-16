import * as React from "react";
import { LocaleProps, LocalePropsTypes } from "./LocaleProps";
import {LocaleState} from "./LocaleState";
import { LocaleContext } from "./LocaleContext";

export class Locale extends React.Component<LocaleProps, LocaleState> {
    private static readonly propTypes = LocalePropsTypes;

    public constructor(props) {
        super(props);
        const { listLanguages } = props;
        const languages: object = listLanguages ? this.listFilter(listLanguages) : props.languages;
        const defaultLanguage = props.defaultLanguage ? props.defaultLanguage : Object.keys(languages)[0];
        this.state = {
            language: defaultLanguage,
            listLanguages,
            languages,
            switchLocale: (language: string): void => this.setState({language})
        }
    }

    public shouldComponentUpdate(nextProps, nextState) {
        if (nextState.language !== this.state.language) {
            this.forceUpdate();
        }
        return false;
    }

    public render() {
        return (
            <LocaleContext.Provider value={this.state}>
                {this.props.children}
            </LocaleContext.Provider>
        );
    }

    private listFilter(listLanguages: string[]): object {
        let list: object = {};
        listLanguages.forEach((key) => list = {...list, [key]: this.props.languages[key] });
        return list;
    }
}
