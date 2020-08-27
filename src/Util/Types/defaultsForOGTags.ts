import {OptionsState} from "../../Store/Options/OptionsTypes";

export const defaultsForOGTags = (metaData: Array<any>, options: OptionsState) => {
    const image = metaData.find(meta => {
        return meta.property === "og:image";
    })

    if (!image) {
        return [
            ...metaData,
            {
                property: 'og:image',
                content: options.options?.open_graph.default_image.url,
            },
            {
                property: 'og:image:width',
                content: options.options?.open_graph.default_image.width,
            },
            {
                property: 'og:image:height',
                content: options.options?.open_graph.default_image.height,
            }
        ];
    }

    return metaData;
}