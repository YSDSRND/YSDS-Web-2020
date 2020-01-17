import React from "react";
import Case, {CaseProps} from "./Case";

export const CasesACFLayout = "cases";
export type CasesProps = {
  acf_fc_layout: typeof CasesACFLayout,
  cases: Array<CaseProps>
}

const Cases: React.FC<CasesProps> = ({cases}) => {
  return (
    <section className="cases">
      <div className="main">
        <div className="main-inner">
          {
            cases.map((caseItem: CaseProps) => {
              return (
                <Case {...caseItem} />
              )
            })
          }
          
        </div>
      </div>
    </section>
  );
};

export default Cases;
