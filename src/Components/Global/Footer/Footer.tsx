import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";
import Link from "../Link";
import { Link as RouterLink } from "react-router-dom";

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
          <RouterLink to="/">
            <img src={footer_logo && footer_logo.sizes && footer_logo.sizes.large ? footer_logo.sizes.large:""} alt={footer_logo? footer_logo.alt : ""} />
          </RouterLink>
          {navigation.map(({ subnavigation }) => {
            return (
              <ul>
                {subnavigation.map(({ link }) => {
                  return (
                    <li>
                      <Link to={link.url}>{link.title}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
