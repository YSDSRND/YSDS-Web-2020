import {BASE_URL} from "../config";
import {Countries} from "../../Store/Countries/CountriesTypes";

export const GetCountries = (): Promise<Countries> => {
    return fetch(BASE_URL + '/ysds/v1/countries').then(res => res.json());
}