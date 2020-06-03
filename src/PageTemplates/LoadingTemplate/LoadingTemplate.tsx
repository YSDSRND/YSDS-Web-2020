import React, { useState, useEffect } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";

const LoadingPage: React.FC = () => {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
  return (<div className="highblack">
      <PulseLoader
          css={override}
          size={80}
          color={"#FFE900"}
          loading={true}
        />
  </div>);
  
  
};
export default LoadingPage;
