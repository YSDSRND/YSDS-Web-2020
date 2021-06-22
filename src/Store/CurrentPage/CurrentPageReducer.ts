import {CurrentPageActionTypes, CurrentPageState, SET_CURRENT_PAGE} from "./CurrentPageTypes";


const initialState: CurrentPageState = {
    currentPage: null
}

export const currentPageReducer = (state = initialState, action: CurrentPageActionTypes ): CurrentPageState => {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state;
    }

}