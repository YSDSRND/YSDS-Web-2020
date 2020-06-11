import { BASE_URL } from '../config';


const API_URL = `${BASE_URL}/better-rest-endpoints/v1/post`;
export const GetPostBySlug = (slug : string) => fetch(`${API_URL}/${slug}`)
  .then((resp) => resp.json());

const POSTS_API_URL = `${BASE_URL}/better-rest-endpoints/v1/posts?per_page=1&page=`;
export const getPosts = (page:number) => fetch(`${POSTS_API_URL}${page}`)
  .then((resp) => resp.json());


  export const GetYoastBySlug= (slug : string) => fetch(`${BASE_URL}/wp/v2/post/?slug=${slug}`)
  .then((resp) => resp.json());