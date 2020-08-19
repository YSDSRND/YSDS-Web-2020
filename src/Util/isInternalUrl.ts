export const isInternalUrl = (link: string): boolean => {
    const url = new URL(link);
    return process.env.NODE_ENV !== 'production' ? url.href.startsWith('https://ysds.netlify.app') : url.href.startsWith(window.location.origin)
}