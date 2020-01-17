import React from "react";
import Case, {CaseProps} from "./Case";


export type CasesProps = {
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
