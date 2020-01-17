import React from 'react';

export const AgentsACFLayout = "agents";
export type AgentsProps = {
  acf_fc_layout: typeof AgentsACFLayout,
  header: string,
  body: string,
  agents: Array<Agent>,
}

type Agent = {
  country: string,
  city: string,
}

const Agents  : React.FC<AgentsProps> = ({header, body, agents}) => {
    return (
      <section className="agents">
      <div className="main">
        <h2>{header}</h2>
          <div className="line three-col"></div>
          <p className="subtitle">{body}</p>

          <div className="main-inner">
            <p className="list">
              {
                agents.map((agent: Agent, index, arr) => {
                  return (
                    [
                      `${agent.country} - ${agent.city}`,
                      <br />
                    ]
                  )
                })
              }
            </p>
          </div>
      </div>
  </section>

    )
}

export default Agents;