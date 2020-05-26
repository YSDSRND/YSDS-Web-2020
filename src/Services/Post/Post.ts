import {BASE_URL} from '../config';


const API_URL = BASE_URL + "/better-rest-endpoints/v1/post"
export const GetPostBySlug = (slug : string) => {
    return fetch(`${API_URL}/${slug}`)
        .then(resp => resp.json())
}

const POSTS_API_URL = BASE_URL + "/better-rest-endpoints/v1/posts?per_page=20&page="
export const getPosts = (page:number) => {
    return fetch(`${POSTS_API_URL}${page}`)
    .then(resp => resp.json())
}