import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/better-rest-endpoints/v1/case`;
export const GetCaseByID = (id : number) => fetch(`${API_URL}/${id}`)
  .then((resp) => resp.json());

export const GetCaseBySlug = (slug : string) => fetch(`${API_URL}/${slug}`)
  .then((resp) => resp.json());
