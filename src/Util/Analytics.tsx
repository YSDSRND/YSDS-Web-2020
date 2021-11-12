import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


declare global {
    interface Window {
        gtag?: any
    }
}


const Analytics : React.FC = () => {

    const location = useLocation();
    useEffect(() => {
        window.gtag?.('event', 'page_view', { page_location: location.pathname + location.search });
    }, [location])

    return null
}

export default Analytics;