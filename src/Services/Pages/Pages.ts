import { BASE_URL } from '../config';


const API_URL = `${BASE_URL}/better-rest-endpoints/v1/page`;
export const GetPageBySlug = (slug : string) => fetch(`${API_URL}${slug}`)
  .then((resp) => resp.json());

export const GetPageByID = (id : number) => fetch(`${API_URL}/${id}`)
  .then((resp) => resp.json());

  export const GetYoastBySlug= (slug : string) => fetch(`${BASE_URL}/wp/v2/pages/?slug=${slug}`)
  .then((resp) => resp.json());
  export const GetYoastById= (id : number) => fetch(`${BASE_URL}/wp/v2/pages/${id}`)
      .then((resp) => resp.json());