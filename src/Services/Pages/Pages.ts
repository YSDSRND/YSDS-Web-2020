import { BASE_URL } from '../config';


const API_URL = `${BASE_URL}/better-rest-endpoints/v1/page`;
export const GetPageBySlug = (slug : string) => fetch(`${API_URL}${slug}`)
  .then((resp) => resp.json());

export const GetPageByID = (id : number) => fetch(`${API_URL}/${id}`)
  .then((resp) => resp.json());
