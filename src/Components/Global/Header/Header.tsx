import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";
import Link from "../Link/Link";
import { Link as RouterLink } from "react-router-dom";
import LinkButton from "../LinkButton/LinkButton";
import ContactForm from '../ContactForm/ContactForm'

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const contactButtonRef = useRef(null);
  const [openSubNavs, setOpenSubNavs] = useState<Map<number, boolean>>(
    new Map<number, boolean>()
  );

  const [formOpen, setFormOpen] = useState<boolean>(false);


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
          src={
            header_logo && header_logo.sizes && header_logo.sizes.large
              ? header_logo.sizes.large
              : ""
          }
          alt={header_logo ? header_logo.alt : ""}
        />
      </RouterLink>
      <ul className="menu-container desktop">
        {navigation.map((nav:any,i) => {
          let className=""
          if (nav.submenus){
            className += "has-children"
            if (nav.submenus.length === 1){
              className += " one-submenu"
            }
          }
          return (
            <li className={className} key={i}>
              <Link to={nav.link.url}>{nav.link.title}</Link>
              <div className="sub-menu">
                {typeof nav.submenus === "object" &&
                  nav.submenus.map((subs:any,i:any) => {
                    return (
                      <div className="sub-menu-list" key={i}>
                        {
                          subs.title.length > 0 ? (
                            <h5>{subs.title}</h5>
                          ): null
                        }
                        <ul>
                          {typeof subs.navigation === "object" &&
                            subs.navigation.map((l:any,key:any) => {
                              return (
                                <li key={key}>
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
      <button ref={contactButtonRef} className={"ysds-button normal"} onClick={() => {
        setFormOpen(!formOpen);
      }}>
        Contact us
      </button>
      <FormDropdown openButtonRef={contactButtonRef} open={formOpen} onClose={() => {setFormOpen(false)}} />
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
              <li className={nav.submenus ? "has-children" : ""} key={index}>
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
                    nav.submenus.map((subs,k) => {
                      return (
                        <div className="sub-menu-list" key={k}>
                          {
                          subs.title.length > 0 ? (
                            <h5>{subs.title}</h5>
                          ): null
                        }
                          <ul>
                            {typeof subs.navigation === "object" &&
                              subs.navigation.map((l,key) => {
                                return (
                                  <li key={key}>
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

type FormDropdownProps = {
  open: boolean;
  onClose: (() => void)
  openButtonRef: any
};
const FormDropdown: React.FC<FormDropdownProps> = ({open, onClose, openButtonRef}) => {
  const dropdownRef : any = useRef(null);



  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e: any) => {
    if(!dropdownRef || !dropdownRef.current || !openButtonRef || !openButtonRef.current) {
      return;
    }
    if(!dropdownRef.current.contains(e.target) && !openButtonRef.current.contains(e.target)) {
      onClose();
      return;
    }
  };

  if(!open) {
    return <></>
  }
  return (
    <div ref={dropdownRef} className="header-contact-form">
      <h4>Write us an email</h4>
      <ContactForm />
    </div>
  );
};
