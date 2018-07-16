import React from "react";

export const LocaleContext = React.createContext({
    language: "",
    listLanguages: [],
    languages: {},
    switchLocale: (language: string): void => void(0)
});
