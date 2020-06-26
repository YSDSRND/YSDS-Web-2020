import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppState } from '../../../Store';
import Link from '../Link/Link';
import ContactForm from '../ContactForm/ContactForm';

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const contactButtonRef = useRef(null);
  const [openSubNavs, setOpenSubNavs] = useState<Map<number, boolean>>(
    new Map<number, boolean>(),
  );
  const location = useLocation();
  const [hideDropdown, setHideDropdown] = useState<boolean>(false);

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

  const { header_logo, navigation } = options.options.header;
  return (
    <section className="header">
      <RouterLink
        onClick={() => {
          closeMobileNav()
          window.scrollTo(0, 0);
        }}
        to="/"
      >
        <img
          className="logo"
          src={
            header_logo && header_logo.sizes && header_logo.sizes.large
              ? header_logo.sizes.large
              : ''
          }
          alt={header_logo ? header_logo.alt : ''}
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
          return (
            <li className={className} key={i}>
              <Link onClick={() => {window.scrollTo(0, 0)}} to={nav.link.url}><span dangerouslySetInnerHTML={{ __html: nav.link.title }} /></Link>
              <div className={"sub-menu"}>
                {typeof nav.submenus === 'object'
                  && nav.submenus.map((subs: any, index: any) => (
                    <div className="sub-menu-list" style={{display: !hideDropdown ? "block" : "none"}} key={index}>
                      {
                        subs.title.length > 0 ? (
                          <h5 dangerouslySetInnerHTML={{ __html: subs.title }}></h5>
                        ) : null
                      }
                      <ul>
                        {typeof subs.navigation === 'object'
                          && subs.navigation.map((l: any, key: any) => (
                            <li key={key}>
                              <Link onClick={() => {window.scrollTo(0, 0)}} to={l.link.url}><span dangerouslySetInnerHTML={{ __html: l.link.title }}></span></Link>
                            </li>
                          ))}
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
          {navigation.map((nav, index) => (
            <li className={nav.submenus ? `has-children ${openSubNavs.get(index) ? 'show' : ''}` : ''} key={index}>
              <span
                onClick={() => openSubMenu(nav, index)}
              >
                <Link
                  onClick={() => {
                    setMobileNavOpen(false);
                    window.scrollTo(0, 0)
                  }}
                  to={nav.link.url}
                >
                  {nav.link.title}
                </Link>
              </span>
              <div
                className={`sub-menu ${openSubNavs.get(index) ? 'show' : ''}`}
              >
                {typeof nav.submenus === 'object'
                  && nav.submenus.map((subs, k) => (
                    <div className="sub-menu-list" key={k}>
                      {
                        subs.title.length > 0 ? (
                          <h5>{subs.title}</h5>
                        ) : null
                      }
                      <ul>
                        {typeof subs.navigation === 'object'
                          && subs.navigation.map((l, key) => (
                            <li key={key}>
                              <Link
                                onClick={() => {
                                  setMobileNavOpen(false);
                                  window.scrollTo(0, 0)
                                }}
                                to={l.link.url}
                              >
                                {l.link.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </li>
          ))}
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
