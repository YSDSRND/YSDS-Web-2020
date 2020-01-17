import React from 'react';


export type OfficeProps = {
    email: string,
    phoneNumber: string,
}

const Office : React.FC<OfficeProps> = () => {
    return (
        <div className="one-card">
                <img></img>
                <div className="text-container">
                  <h3>Amsterdam</h3>
                  <p>Modemstraat 13<br></br>
                  1033 RW Amsterdam<br></br>
                  Netherlands<br></br>
                  <a>order.ams@ysds.com</a><br></br>
                  <a>+31 20 214 21 87</a></p>
                </div>

                </div>
    )
}

export default Office;