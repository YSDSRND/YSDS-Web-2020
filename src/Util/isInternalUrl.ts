export const isInternalUrl = (link: string): boolean => {
    try {
        const url = new URL(link);
        return process.env.NODE_ENV !== 'production' ? url.href.startsWith('https://ysds.com') : url.href.startsWith(window.location.origin)
    } catch (e) {
        return false;
    }

}