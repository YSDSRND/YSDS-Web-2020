import {base_url} from '../config';


const API_URL = base_url + "/better-rest-endpoints/v1/office"
export const GetOfficeByID = (id : number) => {
    return fetch(`${API_URL}/${id}`)
        .then(resp => resp.json())
}