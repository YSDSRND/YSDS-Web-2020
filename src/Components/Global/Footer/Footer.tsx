import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store";

const Footer: React.FC = () => {
  const options = useSelector((state: AppState) => state.options);
  if (!options.options || options.loading) {
    return <></>;
  }
  const { footer_logo } = options.options;
  return (
    <section className="footer">
      <div className="main">
        <div className="main-inner">
          <img src={footer_logo.sizes.large} alt={footer_logo.alt} />
          <ul>
            <li>Privacy policy</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Environment</li>
          </ul>
          <ul>
            <li>Solutions</li>
            <li>Terms and conditions</li>
            <li>Career</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
