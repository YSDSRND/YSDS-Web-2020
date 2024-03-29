import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { AppState } from '../../../Store';
import Link from '../Link';

const Footer: React.FC = () => {
  const options = useSelector((state: AppState) => state.options);
  if (!options.options || options.loading) {
    return <></>;
  }

  const { footer_logo, navigation } = options.options.footer;
  return (
    <section className="footer">
      <div className="main">
        <div className="main-inner">
          <RouterLink to="/" onClick={() => {window.scrollTo(0, 0)}}>
            <img src={footer_logo && footer_logo.sizes && footer_logo.sizes.large ? footer_logo.sizes.large : ''} alt={footer_logo ? footer_logo.alt : ''} />
          </RouterLink>
          {navigation.map(({ subnavigation }, j) => (
            <ul key={j}>
              {subnavigation.map(({ link }, i) => (
                <li key={i}>
                  {link.url.startsWith('https://ysds.com') ? (
                    <Link onClick={() => {window.scrollTo(0, 0)}} to={link.url}><span dangerouslySetInnerHTML={{__html: link.title}}></span></Link>
                  ) : (
                    <a href={link.url} target="_blank" rel="noopener noreferrer"><span dangerouslySetInnerHTML={{__html: link.title}}></span></a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="ysdscookie"
        style={{ background: 'black' }}
        buttonStyle={{ color: 'black', background: '#F26703', fontSize: '13px', borderRadius: '20px' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
        {' '}

      </CookieConsent>
    </section>
  );
};

export default Footer;
