import React from 'react';

export const AgentsACFLayout = 'agents';
export type AgentsProps = {
  acf_fc_layout: typeof AgentsACFLayout,
  header: string,
  body: string,
  agents: Agent[],
}

type Agent = {
  country: string,
  city: string,
}

const Agents : React.FC<AgentsProps> = ({ header, body, agents }) => (
  <section className="agents">
    <div className="main">
      <h2>{header}</h2>
      <div className="line three-col" />
      <p className="subtitle">{body}</p>

      <div className="main-inner">
        <p className="list">
          {
                agents.map((agent: Agent, index, arr) => (
                  [
                    <span key={index}>
                      {agent.country}
                      {' '}
                      -
                      {' '}
                      {agent.city}
                    </span>,
                    <br key={`br${index}`} />,
                  ]
                ))
              }
        </p>
      </div>
    </div>
  </section>

);

export default Agents;
