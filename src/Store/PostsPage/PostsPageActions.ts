import {
    SET_LAST,
    SET_LOADING,
    SET_PAGE,
    SET_POSTS,
    SetLastAction,
    SetLoadingAction,
    SetPageAction,
    SetPostsAction
} from "./PostsPageTypes";


export const SetPosts = (posts: any[]): SetPostsAction => ({
    type: SET_POSTS,
    payload: posts,
})

export const SetPage = (page: number): SetPageAction => ({
    type: SET_PAGE,
    payload: page,
})

export const SetLoading = (loading: boolean): SetLoadingAction => ({
    type: SET_LOADING,
    payload: loading,
})

export const SetLast = (last: boolean): SetLastAction => ({
    type: SET_LAST,
    payload: last,
})