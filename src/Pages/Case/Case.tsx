import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Flexible from "../../Components/Global/Flexible/Flexible";
import { GetCaseBySlug } from "../../Services/Cases/Cases";

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
    return <p>Loading...</p>;
  }

  if (is404) {
    return <h1>404</h1>;
  }

  return <Flexible flexible={data.acf.flexible} />;
};
export default Case;
