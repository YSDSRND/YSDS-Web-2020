import { SetCurrentPageAction, SET_CURRENT_PAGE } from "./CurrentPageTypes";


export const SetCurrentPage = (post: any): SetCurrentPageAction => ({
    type: SET_CURRENT_PAGE,
    payload: post,
})