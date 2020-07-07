export type PostsPageState = {
    page: number
    posts: any[]
    loading: boolean
    last: boolean
}

export const SET_POSTS = 'SET_POSTS';
export interface SetPostsAction {
    type: typeof SET_POSTS,
    payload: any[],
}

export const SET_PAGE = 'SET_PAGE';
export interface SetPageAction {
    type: typeof SET_PAGE,
    payload: number,
}

export const SET_LOADING = 'SET_LOADING';
export interface SetLoadingAction {
    type: typeof SET_LOADING,
    payload: boolean,
}

export const SET_LAST = 'SET_LAST';
export interface SetLastAction {
    type: typeof SET_LAST,
    payload: boolean,
}

export type PostsPageActionTypes = SetPostsAction | SetPageAction | SetLoadingAction | SetLastAction;