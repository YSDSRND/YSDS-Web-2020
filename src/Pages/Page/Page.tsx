import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Flexible from "../../Components/Global/Flexible/Flexible";
import { GetPageBySlug } from "../../Services/Pages/Pages";
import Error404Template from "../../PageTemplates/Error404Template/Error404Template";

const Page: React.FC = (props) => {
  const params = useParams();
  const {slug} = useParams();
  let location = useLocation();

  console.log(slug, "slug")
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();

  useEffect(() => {
    if (!location) {
      return;
    }
    GetPageBySlug(location.pathname).then(resp => {
      if (Array.isArray(resp)) {
        set404(true);
      }
      setData(resp);
      setLoading(false);
    });
  }, [location]);

  if (loading) {
    return <div className="highblack"></div>;
  }
  if (is404) {
    return <Error404Template />
  }
  return <Flexible flexible={data.acf.flexible} />;
};
export default Page;
