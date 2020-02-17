import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";
import Link from "../Link/Link";
import { Link as RouterLink } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [openSubNavs, setOpenSubNavs] = useState<Map<number, boolean>>(
    new Map<number, boolean>()
  );
  const options = useSelector((state: AppState) => state.options);
  if (!options.options || options.loading) {
    return <></>;
  }

  const { header_logo, navigation, contact } = options.options.header;
  return (
    <section className="header">
      <RouterLink
        onClick={() => {
          setMobileNavOpen(false);
        }}
        to="/"
      >
        <img
          className="logo"
          src={header_logo && header_logo.sizes && header_logo.sizes.large ? header_logo.sizes.large : ""}
          alt={header_logo ? header_logo.alt : ""}
        />
      </RouterLink>
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
      <LinkButton button={contact} button_style="normal" />

        <div className="header-contact-form">
            <h4>Write us an email</h4>
            <form>
              <label>Name</label>
              <input type="text" name="name"></input>
              
              <label>Phone nr</label>
              <input type="tel" name="phone"></input>

              <label>Email</label>
              <input type="email" name="email"></input>

              <input type="submit" value="SEND" className="ysds-button small red"></input>
            </form> 
        </div>

      <button
        className="hamburger"
        onClick={() => {
          setMobileNavOpen(!mobileNavOpen);
        }}
      />

      <div className={`menu-container mobile ${mobileNavOpen ? "show" : ""}`}>
        <ul>
          {navigation.map((nav, index) => {
            return (
              <li className={nav.submenus ? "has-children" : ""}>
                <span
                  onClick={() => {
                    if (nav.submenus) {
                      let newMap = new Map<number, boolean>(openSubNavs);
                      newMap.set(index, newMap.get(index) ? false : true);
                      setOpenSubNavs(newMap);
                    }
                  }}
                >
                  <Link
                    onClick={() => {
                      setMobileNavOpen(false);
                    }}
                    to={nav.link.url}
                  >
                    {nav.link.title}
                  </Link>
                </span>
                <div
                  className={`sub-menu ${openSubNavs.get(index) ? "show" : ""}`}
                >
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
                                    <Link
                                      onClick={() => {
                                        setMobileNavOpen(false);
                                      }}
                                      to={l.link.url}
                                    >
                                      {l.link.title}
                                    </Link>
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
