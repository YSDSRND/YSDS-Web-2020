import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop : React.FC = () => {

    const location = useLocation();
    const [previousPathname, setPreviousPathName] = useState(location.pathname);

    useEffect(() => {
        if(location.pathname !== previousPathname) {
            window.scrollTo(0, 0);
            setPreviousPathName(location.pathname);
        }
    }, [location, previousPathname])
    return null;
}

export default ScrollToTop;