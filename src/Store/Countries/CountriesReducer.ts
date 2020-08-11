import {Countries, CountriesActionTypes, SET_COUNTRIES} from "./CountriesTypes";


const initialState: Countries = {};

export const countriesReducer = (state = initialState, action: CountriesActionTypes) : Countries => {
    switch (action.type) {
        case SET_COUNTRIES:
            return action.payload;
        default:
            return state;
    }
}