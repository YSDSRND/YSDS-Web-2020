import React from 'react';

export type CaseProps = {
    header: string,
    body: string,
}

const Case : React.FC<CaseProps> = ({header, body}) => {
    return (
        <div className="one-card">
            <h3>{header}</h3>
            <p>
              {
                  body
              }
            </p>
            <a className="ysds-button lines">more info</a>
          </div>
    )
}

export default Case;