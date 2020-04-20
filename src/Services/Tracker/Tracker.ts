import {base_url} from '../config';


const API_URL = base_url + "/vinnia/v1/track?tracking_number="
export const getTrackingRequest = (trackingId : string) => {
    return fetch(`${API_URL}${trackingId}`)
        .then(resp => resp.json())
}