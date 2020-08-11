
export type Countries = Record<string, string>;

export const SET_COUNTRIES = 'SET_COUNTRIES';
export interface SetCountriesAction {
    type: typeof SET_COUNTRIES,
    payload: Countries,
}

export type CountriesActionTypes = SetCountriesAction