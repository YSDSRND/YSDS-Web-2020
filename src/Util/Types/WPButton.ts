export default interface WPButton {
    button: {        
        target: string,
        title: string,
        url: string
    }
    button_style: ButtonStyles
};

export type ButtonStyles = "normal" | "big" | "lines" | "big lines" | "lines white" | "big lines white";