import { WPOptions, SetOptionsAction, SET_OPTIONS, SetOptionsLoadingAction, SET_OPTIONS_LOADING } from "./OptionsTypes";

export const SetOptions = (options: WPOptions): SetOptionsAction => {
    return {
        type: SET_OPTIONS,
        payload: options
    }
}

export const SetOptionsLoading = (loading: boolean): SetOptionsLoadingAction => {
    return {
        type: SET_OPTIONS_LOADING,
        payload: loading
    }
}