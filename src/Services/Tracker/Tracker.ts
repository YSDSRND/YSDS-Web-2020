import {BASE_URL} from '../config';


const API_URL = BASE_URL + "/vinnia/v1/track?tracking_number="
export const getTrackingRequest = (trackingId : string) => {
    return fetch(`${API_URL}${trackingId}`)
        .then(resp => resp.json())
}