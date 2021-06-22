export const isInternalUrl = (link: string): boolean => {
    try {
        const url = new URL(link);
        return url.href.startsWith('https://ysds.com');
    } catch (e) {
        return false;
    }

}