import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";
import Link from "../Link/Link";
import LinkButton from "../LinkButton/LinkButton";

const Header: React.FC = () => {
  const options = useSelector((state: AppState) => state.options);
  if (!options.options || options.loading) {
    return <></>;
  }

  const { header_logo, navigation, contact } = options.options.header;
  return (
    <section className="header">
      <img
        className="logo"
        src={header_logo.sizes.large}
        alt={header_logo.alt}
      />
      <ul className="menu-container desktop">
        {navigation.map(nav => {
          return (
            <li className={nav.submenus ? "has-children" : ""}>
              <Link to={nav.link.url}>{nav.link.title}</Link>
              <div className="sub-menu">
                {typeof nav.submenus === "object" &&
                  nav.submenus.map(subs => {
                    return (
                      <div className="sub-menu-list">
                        <h5>{subs.title}</h5>
                        <ul>
                          {typeof subs.navigation === "object" &&
                            subs.navigation.map(l => {
                              return (
                                <li>
                                  <Link to={l.link.url}>{l.link.title}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </li>
          );
        })}
      </ul>
      <LinkButton button={contact} button_style="normal"/>
      <img className="hamburger"></img>

      <div className="menu-container mobile">
        <ul>
        {navigation.map(nav => {
          return (
            <li className={nav.submenus ? "has-children" : ""}>
              <Link to={nav.link.url}>{nav.link.title}</Link>
              <div className="sub-menu">
                {typeof nav.submenus === "object" &&
                  nav.submenus.map(subs => {
                    return (
                      <div className="sub-menu-list">
                        <h5>{subs.title}</h5>
                        <ul>
                          {typeof subs.navigation === "object" &&
                            subs.navigation.map(l => {
                              return (
                                <li>
                                  <Link to={l.link.url}>{l.link.title}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </li>
          );
        })}
        </ul>
      </div>
    </section>
  );
};

export default Header;
