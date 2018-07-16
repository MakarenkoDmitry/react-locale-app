export type switchLocaleType = (name: string) => void;

export interface LocaleState {
    language: string,
    listLanguages: string[],
    languages: object,
    switchLocale: switchLocaleType
}