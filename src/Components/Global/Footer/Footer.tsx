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
          <RouterLink to="/">
            <img src={footer_logo && footer_logo.sizes && footer_logo.sizes.large ? footer_logo.sizes.large : ''} alt={footer_logo ? footer_logo.alt : ''} />
          </RouterLink>
          {navigation.map(({ subnavigation }, j) => (
            <ul key={j}>
              {subnavigation.map(({ link }, i) => (
                <li key={i}>
                  <Link to={link.url}>{link.title}</Link>
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
        buttonStyle={{ color: 'white', background: '#846804', fontSize: '13px' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
        {' '}

      </CookieConsent>
    </section>
  );
};

export default Footer;
