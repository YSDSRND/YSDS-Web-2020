import {base_url} from '../config';

const API_URL = base_url + "/better-rest-endpoints/v1/case"
export const GetCaseByID = (id : number) => {
    return fetch(`${API_URL}/${id}`)
        .then(resp => resp.json())
}

export const GetCaseBySlug = (slug : string) => {
    return fetch(`${API_URL}/${slug}`)
        .then(resp => resp.json())
}