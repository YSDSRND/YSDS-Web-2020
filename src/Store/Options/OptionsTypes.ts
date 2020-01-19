import { WPImage } from "../../Util/Types/WPImage";

export type WPOptions = {
    footer_logo: WPImage,
    header_logo: WPImage,
}

export interface OptionsState {
    loading: boolean
    options: WPOptions | null
}

export const SET_OPTIONS = "SET_OPTIONS";
export interface SetOptionsAction {
    type: typeof SET_OPTIONS,
    payload: WPOptions,
}

export const SET_OPTIONS_LOADING = "SET_OPTIONS_LOADING";
export interface SetOptionsLoadingAction {
    type: typeof SET_OPTIONS_LOADING,
    payload: boolean
}

export type OptionsActionTyoes = SetOptionsAction | SetOptionsLoadingAction