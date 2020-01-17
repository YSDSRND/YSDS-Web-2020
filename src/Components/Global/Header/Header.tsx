import React from 'react';

const Header : React.FC = () => {
    return (
        <section className="header">       
      <img className="logo"></img>
      <ul className="menu-container desktop">
        <li><a href="#">Solutions</a></li>
        <li className="has-children"><a href="#">Solutions</a>
          <div className="sub-menu">
              <div className="sub-menu-list">
                <h5>Solutions</h5>
                <ul>
                  <li><a href="#">INFO/Freight Forward</a></li>
                  <li><a href="#">OBC</a></li>
                  <li><a href="#">Charter</a></li>
                  <li><a href="#">Dedicated Vehicle</a></li>
                </ul>
              </div>
              <div className="sub-menu-list">
                <h5>Title here</h5>
                <ul>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                </ul>
              </div>
              <div className="sub-menu-list">
                <h5>Title here</h5>
                <ul>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                </ul>
              </div>
          </div>
        </li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Solutions</a></li>
      </ul>
      <a className="ysds-button">Contact</a>
      <img className="hamburger"></img>

      <div className="menu-container mobile">
        <ul>
        <li><a href="#">Solutions</a></li>
        <li className="has-children"><a href="#">Solutions</a>
          <div className="sub-menu">
              <div className="sub-menu-list">
                <h5>Solutions</h5>
                <ul>
                  <li><a href="#">INFO/Freight Forward</a></li>
                  <li><a href="#">OBC</a></li>
                  <li><a href="#">Charter</a></li>
                  <li><a href="#">Dedicated Vehicle</a></li>
                </ul>
              </div>
              <div className="sub-menu-list">
                <h5>Title here</h5>
                <ul>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                </ul>
              </div>
              <div className="sub-menu-list">
                <h5>Title here</h5>
                <ul>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                  <li><a href="#">Solutions</a></li>
                </ul>
              </div>
          </div>
        </li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Solutions</a></li>
        </ul>
      </div>
    </section>
    )
}

export default Header;