import React from "react";

export const BulletACFLayout = "check_list";
export type BulletProps = {
    bullets: [{ title: string, text: string, icon: string }],
    style: string,
    title: string,
    acf_fc_layout: "check_list"

};

const Bullets: React.FC<BulletProps> = ({ bullets,  style  , title }) => {
    return (
        <section className={'check-list'}>
            <div className="main">
                <div className="main-inner">
                    <h2>{title}</h2>
                    <div className={"flex-container " + style}>
                        {
                            bullets.map((bullet, i) => {
                                return (
                                    <div className="bullet" key={i}>
                                        <div className="check-mark" dangerouslySetInnerHTML={{__html:bullet.icon }}/>
                                        <div className="text-container">
                                            <h3>{bullet.title}</h3>
                                            <p>{bullet.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bullets;
