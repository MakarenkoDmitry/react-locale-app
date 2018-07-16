import * as PropTypes from "prop-types";

export interface LocaleProps {
    defaultLanguage?: string,
    listLanguages?: string[],
    languages: object,
    children: JSX.Element
}

export const LocalePropsTypes = {
    defaultLanguage: PropTypes.string,
    listLanguages: PropTypes.array,
    languages: PropTypes.object.isRequired,
    children: PropTypes.element
};
