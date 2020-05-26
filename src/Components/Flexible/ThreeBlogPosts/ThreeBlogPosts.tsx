import React, { useState, useEffect } from "react";
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { GetPostBySlug, getPosts } from "../../../Services/Post/Post";


export const ThreeBlogPostsPropsACFLayout = "latest_blog_posts";
export type ThreeBlogPostsProps = {
    acf_fc_layout: typeof ThreeBlogPostsPropsACFLayout,
    title: string,
    button: WPButton,
    background_color:string
}

const Hero: React.FC<ThreeBlogPostsProps> = ({ title, button,background_color }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>([]);

    useEffect(() => {

        getPosts(0).then(resp => {
            setData(resp.slice(0, 3));
            setLoading(false);
        });
    }, []);

    if (loading) {
        return  <div className="highblack"/>;
    }


    return (
        <>
            <section className={"latest-blog-posts " + background_color}>
                <div className="main">
                    <div className="main-inner">
                        <h2>{title}</h2>
                        <div className="flex-container">
                            {
                                data.map((card: any, i:number) => {
                                    return (
                                        <a key={i} className="one-post" href={"/posts/" + card.slug}>
                                            <img src={card.media? card.media.large : ""}/>
                                            <h3>{card.title}</h3>
                                            <p className="date">27 maj 2020</p>
                                            <p>{card.excerpt}</p>
                                        </a>
                                    )

                                })
                            }

                        </div>
                        <LinkButton {...button} />
                    </div>
                </div>
            </section>



        </>
    )
}

export default Hero;