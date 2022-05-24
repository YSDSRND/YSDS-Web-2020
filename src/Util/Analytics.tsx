import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
    interface Window {
        gtag?: any
        dataLayer?: Array<Object>
    }
}

/**
 * Creates a page title from the window pathname for use in GA datalayer event.
 * @param pathname - The pathname of the current window.
 * @returns The page title as a string.
 */
function createTitle(pathname: string): string {
    let title: string = pathname
    title = title.slice(1, -1)
    
    // Handle one route deep nesting
    if (title.lastIndexOf('/') === -1) {
        return String(title.charAt(0).toUpperCase() + title.slice(1)).replaceAll('-', ' ')
    }
    
    title = title.substring(title.lastIndexOf('/') + 1).replaceAll('-', ' ')
    return title.charAt(0).toUpperCase() + title.slice(1)
}

/**
 * Function that runs a sideeffect on every location change which handles the GTM datalayer
 * and gtag, which currently isnt't in use, as it was replaced by GTM.
 * @returns null 
 */
const Analytics: React.FC = () => {
    const location = useLocation()
    const { pathname, search } = location
    
    useEffect(() => {
        // window.gtag?.('event', 'page_view', { page_location: location.pathname + location.search });
        window.dataLayer?.push({
            'event': 'VirtualPageView',
            'pageTitle': document.title.length > 0
                ? document.title
                : createTitle(pathname),
            'pageURL': pathname + search,
        })
    }, [location])

    return null
}

export default Analytics;