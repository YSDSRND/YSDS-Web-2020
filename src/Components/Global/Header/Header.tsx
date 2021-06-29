import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppState } from '../../../Store';
import Link from '../Link/Link';
import ContactForm from '../ContactForm/ContactForm';
import { IndustryBanner } from "../IndustryBanner/IndustryBanner";
import { isInternalUrl } from "../../../Util/isInternalUrl";
import { YsdsBrand, YsdsBrandLogo } from '../../../types';
import { getYsdsBrand } from '../../../Util/Util';

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const contactButtonRef = useRef(null);
  const [openSubNavs, setOpenSubNavs] = useState<Map<number, boolean>>(
    new Map<number, boolean>(),
  );
  const location = useLocation();
  const [hideDropdown, setHideDropdown] = useState<boolean>(false);
  const currentPage = useSelector((state: AppState) => state.currentPage)

  React.useEffect(() => {

    setHideDropdown(true)
    setTimeout(() => {
      setHideDropdown(false)

    }, 100)

  }, [location]);

  const [formOpen, setFormOpen] = useState<boolean>(false);


  const options = useSelector((state: AppState) => state.options);
  if (!options.options || options.loading) {
    return <></>;
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const reverseMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const reverseForm = () => {
    setFormOpen(!formOpen);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const openSubMenu = (nav: any, index: any) => {
    if (nav.submenus) {
      const newMap = new Map<number, boolean>(openSubNavs);
      newMap.set(index, !newMap.get(index));
      setOpenSubNavs(newMap);
    }
  };

  const onClick = () => {
    setMobileNavOpen(false);
    window.scrollTo(0, 0)
  }

  const { navigation } = options.options.header;

  const brandPage: YsdsBrand = getYsdsBrand(currentPage.currentPage?.acf.ysds_brand)
  const brandLogo = YsdsBrandLogo[brandPage];

  return (
    <section className="header">
      <IndustryBanner />
      <div className="nav">
        <RouterLink
          onClick={() => {
            closeMobileNav()
            window.scrollTo(0, 0);
          }}
          to="/"
        >
          <img
            className="logo"
            src={brandLogo}
            alt="YSDS logo"
          />
        </RouterLink>
        <ul className="menu-container desktop">
          {navigation.map((nav: any, i) => {
            let className = '';
            if (nav.submenus) {
              className += 'has-children';
              if (nav.submenus.length === 1) {
                className += ' one-submenu';
              }
            }

            const button = isInternalUrl(nav.link.url)
              ? <Link onClick={() => { window.scrollTo(0, 0) }} to={nav.link.url}><span dangerouslySetInnerHTML={{ __html: nav.link.title }}></span></Link>
              : <a href={nav.link.url}><span dangerouslySetInnerHTML={{ __html: nav.link.title }}></span></a>

            return (
              <li className={className} key={i}>
                {button}
                <div className={"sub-menu"}>
                  {typeof nav.submenus === 'object'
                    && nav.submenus.map((subs: any, index: any) => (
                      <div className="sub-menu-list" style={{ display: !hideDropdown ? "block" : "none" }} key={index}>
                        {
                          subs.title.length > 0 ? (
                            <h5 dangerouslySetInnerHTML={{ __html: subs.title }}></h5>
                          ) : null
                        }
                        <ul>
                          {typeof subs.navigation === 'object'
                            && subs.navigation.map((l: any, key: any) => {
                              const button = isInternalUrl(l.link.url)
                                ? <Link onClick={() => { window.scrollTo(0, 0) }} to={l.link.url}><span dangerouslySetInnerHTML={{ __html: l.link.title }}></span></Link>
                                : <a href={l.link.url}><span dangerouslySetInnerHTML={{ __html: l.link.title }}></span></a>

                              return <li key={key}>{button}</li>
                            }
                            )}
                        </ul>
                      </div>
                    ))}
                </div>
              </li>
            );
          })}
        </ul>
        <button ref={contactButtonRef} className="ysds-button normal" onClick={reverseForm}>
          Get in touch!
        </button>
        <FormDropdown openButtonRef={contactButtonRef} open={formOpen} onClose={closeForm} />
        <button
          className={"hamburger " + (mobileNavOpen ? "navopen" : "")}
          onClick={reverseMobileNav}
        />

        <div className={`menu-container mobile ${mobileNavOpen ? 'show' : ''}`}>
          <ul>
            {navigation.map((nav, index) => {
              const button = isInternalUrl(nav.link.url)
                ? <Link onClick={() => onClick()} to={nav.link.url}><span dangerouslySetInnerHTML={{ __html: nav.link.title }}></span></Link>
                : <a href={nav.link.url}><span dangerouslySetInnerHTML={{ __html: nav.link.title }}></span></a>

              return (
                <li className={nav.submenus ? `has-children ${openSubNavs.get(index) ? 'show' : ''}` : ''} key={index}>
                  <span onClick={() => openSubMenu(nav, index)}>
                    {button}
                  </span>
                  <div className={`sub-menu ${openSubNavs.get(index) ? 'show' : ''}`}>
                    {typeof nav.submenus === 'object'
                      && nav.submenus.map((subs, k) => (
                        <div className="sub-menu-list" key={k}>
                          {
                            subs.title.length > 0 ? (
                              <h5 dangerouslySetInnerHTML={{ __html: subs.title }}></h5>
                            ) : null
                          }
                          <ul>
                            {typeof subs.navigation === 'object'
                              && subs.navigation.map((l, key) => {
                                const button = isInternalUrl(l.link.url)
                                  ? <Link onClick={() => onClick()} to={l.link.url}><span dangerouslySetInnerHTML={{ __html: l.link.title }}></span></Link>
                                  : <a href={l.link.url}><span dangerouslySetInnerHTML={{ __html: l.link.title }}></span></a>

                                return <li key={key}>{button}</li>
                              })}
                          </ul>
                        </div>
                      ))}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
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
const FormDropdown: React.FC<FormDropdownProps> = ({ open, onClose, openButtonRef }) => {
  const dropdownRef: any = useRef(null);


  useEffect(() => {
    const handleClick = (e: any) => {
      if (!dropdownRef || !dropdownRef.current || !openButtonRef || !openButtonRef.current) {
        return;
      }
      if (!dropdownRef.current.contains(e.target) && !openButtonRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClose, openButtonRef]);


  if (!open) {
    return <></>;
  }
  return (
    <div ref={dropdownRef} className="header-contact-form">
      <h4>Contact an expert</h4>
      <ContactForm />
    </div>
  );
};
