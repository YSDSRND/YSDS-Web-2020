import React from 'react';

export const TextAndImageACFLayout = "text_and_image";
export type TextAndImageProps = {
    acf_fc_layout: typeof TextAndImageACFLayout,
    mirrored?: boolean
}

const TextAndImage : React.FC<TextAndImageProps> = ({mirrored}) => {
    return (
        <section className={`text-and-image ${mirrored ?? 'mirrored'}`}>
        <div className="main">
            <div className="main-inner">
                <div className="text-container">
                    <h2>Pharmaceuticals</h2>
                    <div className="line three-col"></div>
                    <div className="content">
                      <p>If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met. If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met. If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met.
                      <br></br><br></br>
                      If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met. If you are close to our offices, you are more than welcome to drop by. If you happen to be further away, don't worry, our global network of agents and partners will make sure your needs are also met.
                      </p>
                    </div>
                </div>
                <div className="image-container">
                  <img></img>
                </div>
            </div>
        </div>
    </section>
    )
}

export default TextAndImage