import React, { useState, useEffect } from "react";
import Flexible from "../../Components/Global/Flexible/Flexible";
import { GetPageByID } from "../../Services/Pages/Pages";
import { useSelector } from "react-redux";
import { AppState } from "../../Store";

const FrontPage: React.FC = () => {
    const options = useSelector((state : AppState) => state.options);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();

  useEffect(() => {
   if(options.loading || !options.options) {
       return;
   }
    GetPageByID(options.options.frontpage).then(resp => {
      if (Array.isArray(resp)) {
        set404(true);
      }
      setData(resp);
      setLoading(false);
    });
  }, [options]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (is404) {
    return <h1>404</h1>;
  }
  return <Flexible flexible={data.acf.flexible} />;
};
export default FrontPage;
