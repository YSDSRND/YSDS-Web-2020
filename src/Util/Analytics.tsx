import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


declare global {
    interface Window {
        ga?: any
    }
}


const Analytics : React.FC = () => {

    const location = useLocation();
    useEffect(() => {
        if(window.ga) {
            window.ga('set', 'page', location.pathname + location.search);
            window.ga('send', 'pageview');
        }

    }, [location])

    return null
}

export default Analytics;