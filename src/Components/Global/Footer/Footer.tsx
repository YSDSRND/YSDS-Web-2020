import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";
import Link from "../Link";

const Footer: React.FC = () => {
  const options = useSelector((state: AppState) => state.options);
  if (!options.options || options.loading) {
    return <></>;
  }
  
  const { footer_logo, navigation } = options.options.footer;
  console.log(navigation);
  return (
    <section className="footer">
      <div className="main">
        <div className="main-inner">
          <img src={footer_logo.sizes.large} alt={footer_logo.alt} />
          {
            navigation.map(({subnavigation}) => {
              return (
                <ul>
                  {
                    subnavigation.map(({link}) => {
                      return (
                        <li>
                          <Link to={link.url}>{link.title}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Footer;
