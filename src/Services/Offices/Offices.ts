import { BASE_URL } from '../config';


const API_URL = `${BASE_URL}/better-rest-endpoints/v1/office`;
export const GetOfficeByID = (id : number) => fetch(`${API_URL}/${id}`)
  .then((resp) => resp.json());


export const GetOffices = () => fetch(`${API_URL}?orderby=title&order=asc&per_page=100000`)
  .then((resp) => resp.json());
