import {BASE_URL} from '../config';


const API_URL = BASE_URL + "/better-rest-endpoints/v1/office"
export const GetOfficeByID = (id : number) => {
    return fetch(`${API_URL}/${id}`)
        .then(resp => resp.json())
}


export const GetOffices = () => {
    return fetch(`${API_URL}`)
        .then(resp => resp.json())
}