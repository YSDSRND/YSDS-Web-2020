import React from 'react';
import { css } from "@emotion/core";
import {BarLoader} from "react-spinners";

const LoadingPage: React.FC = () => {
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
  return (<div className="highblack">
      <BarLoader
          css={override}
          width={200}
          height={6}
          color={"#fff"}
          loading={true}
        />
  </div>);
  
  
};
export default LoadingPage;
