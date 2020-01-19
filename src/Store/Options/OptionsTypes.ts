import { WPImage } from "../../Util/Types/WPImage";
import WPLinks from "../../Util/Types/WPLink";

export type WPOptions = {
    footer: {
        footer_logo: WPImage,
        navigation: Array<{
            subnavigation: Array<{
                link: WPLinks
            }>
        }>
    },
    header: {
        header_logo: WPImage,
        navigation: Array<{
            link: WPLinks,
            submenus: boolean | Array<{
                title: string,
                navigation: boolean | Array<{
                    link: WPLinks
                }>
            }>
        }>,
        contact: WPLinks,
    },
    frontpage: number,
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