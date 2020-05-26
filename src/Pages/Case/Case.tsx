import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flexible from "../../Components/Global/Flexible/Flexible";
import { GetCaseBySlug } from "../../Services/Cases/Cases";
import Error404Template from "../../PageTemplates/Error404Template/Error404Template";

const Case: React.FC = () => {
  const { slug } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();

  useEffect(() => {
    if (!slug) {
      return;
    }
    GetCaseBySlug(slug).then(resp => {
      if (Array.isArray(resp)) {
        set404(true);
      }
      setData(resp);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return  <div className="highblack"/>;
  }

  if (is404) {
    return <Error404Template />
  }

  return <Flexible flexible={data.acf.flexible} />;
};
export default Case;
