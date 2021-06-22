export type CurrentPageState = {
    currentPage: any
}

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export interface SetCurrentPageAction {
    type: typeof SET_CURRENT_PAGE,
    payload: any,
}

export type CurrentPageActionTypes = SetCurrentPageAction;