import React, {useState, useEffect} from "react";
import Case, {CaseProps} from "./Case";
import { GetCaseByID } from "../../../Services/Cases/Cases";

export const CasesACFLayout = "cases";
export type CasesProps = {
  acf_fc_layout: typeof CasesACFLayout,
  cases: Array<{
    ID: number,
  }>
}

const Cases: React.FC<CasesProps> = ({cases}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [casesData, setCasesData] = useState<Array<CaseProps>>([]);

  useEffect(() => {
    const promises = cases.map(c => {
      return GetCaseByID(c.ID);
    });

    Promise.all(promises).then((res) => {
      setCasesData(res.map((r) => r.acf));
      setLoading(false);
    })
  }, [cases])
  return (
    <section className="cases">
      <div className="main">
        <div className="main-inner">
          {
            !loading && casesData && casesData.map((caseItem: CaseProps, i) => {
              return (
                <Case key={i} {...caseItem} />
              )
            })
          }
          
        </div>
      </div>
    </section>
  );
};

export default Cases;
