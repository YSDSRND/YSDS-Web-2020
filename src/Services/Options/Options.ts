import {BASE_URL} from '../config';

const API_URL = BASE_URL + "/better-rest-endpoints/v1/options/acf"

export const GetOptions = () => {
    return fetch(API_URL).then(resp => resp.json());
}