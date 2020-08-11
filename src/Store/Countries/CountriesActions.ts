import {Countries, SET_COUNTRIES, SetCountriesAction} from "./CountriesTypes";

export const SetCountries =  (countries: Countries): SetCountriesAction => ({
    type: SET_COUNTRIES,
    payload: countries,
})