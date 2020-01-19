import { OptionsState, OptionsActionTyoes, SET_OPTIONS, SET_OPTIONS_LOADING } from "./OptionsTypes";

const initialState : OptionsState = {
    options: null,
    loading: true,
}

export const optionsReducer = (state = initialState, action : OptionsActionTyoes) : OptionsState => {
    switch(action.type) {
        case SET_OPTIONS:
            console.log("ACTION", action);
            return {...state, options: action.payload}
        case SET_OPTIONS_LOADING:
            return {...state, loading: action.payload}
        default:
            return state;
    }
}
