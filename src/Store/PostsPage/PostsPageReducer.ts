import {PostsPageActionTypes, PostsPageState, SET_LAST, SET_LOADING, SET_PAGE, SET_POSTS} from "./PostsPageTypes";


const initialState: PostsPageState = {
    page: 1,
    posts: [],
    loading: false,
    last: false,
}

export const postsPageReducer = (state = initialState, action: PostsPageActionTypes ): PostsPageState => {
    switch(action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload }
        case SET_PAGE:
            return { ...state, page: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_LAST:
            return { ...state, last: action.payload }
        default:
            return state;
    }

}