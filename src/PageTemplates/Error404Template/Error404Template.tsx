import React from 'react';
//TODO 2020-05-26: this url should be configurable
const Error404Template : React.FC = () => {
    return (
        <div className="error-page">
            <div className="main">
                <div className="main-inner">
                    <h1>404</h1>
                    <p style={{textAlign: "center"}}>We're sorry, but something went wrong. Please start over again at <a href="https://www.ysds.com">www.ysds.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Error404Template;
