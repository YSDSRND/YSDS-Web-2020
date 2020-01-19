import {base_url} from '../config';

const API_URL = base_url + "/better-rest-endpoints/v1/options/acf"

export const GetOptions = () => {
    return fetch(API_URL).then(resp => resp.json());
}