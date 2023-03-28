
export type Countries = Array<{iso: string; name: string; phone: string; email: string }>

export const SET_COUNTRIES = 'SET_COUNTRIES';
export interface SetCountriesAction {
    type: typeof SET_COUNTRIES,
    payload: Countries,
}

export type CountriesActionTypes = SetCountriesAction