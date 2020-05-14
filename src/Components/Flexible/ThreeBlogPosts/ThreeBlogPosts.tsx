import React, { useState, useEffect } from "react";
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { GetPostBySlug, getPosts } from "../../../Services/Post/Post";


export const ThreeBlogPostsPropsACFLayout = "latest_blog_posts";
export type ThreeBlogPostsProps = {
    acf_fc_layout: typeof ThreeBlogPostsPropsACFLayout,
    title: string,
    button: WPButton,
}

const Hero: React.FC<ThreeBlogPostsProps> = ({ title, button }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>([]);

    useEffect(() => {

        getPosts(0).then(resp => {
            setData(resp.slice(0, 3));
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="highblack"></div>;
    }


    return (
        <>
            <section className="latest-blog-posts">
                <div className="main">
                    <div className="main-inner">
                        <h2>{title}</h2>
                        <div className="flex-container">
                            {
                                data.map((card: any) => {
                                    console.log("card", card)
                                    return (
                                        <a className="one-post" href={"/posts/" + card.slug}>
                                            <img src={card.media? card.media.large : ""}></img>
                                            <h3>{card.title}</h3>
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