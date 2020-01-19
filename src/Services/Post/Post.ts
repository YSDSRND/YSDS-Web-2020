import {base_url} from '../config';


const API_URL = base_url + "/better-rest-endpoints/v1/post"
export const GetPostBySlug = (slug : string) => {
    return fetch(`${API_URL}/${slug}`)
        .then(resp => resp.json())
}