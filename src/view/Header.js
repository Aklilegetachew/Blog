import React from "react";

import "./header.css";

function Header() {
  return (
    <div className="headerComponet">
      {/* logo #590135 */}

      <img
        className="logocontain"
        src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png"
        alt="Logo"
      />

      {/* header nav  */}

      <div className="header-nav">
        <div className="header-optopn">
          <span className="optionone">Hello</span>
          <span className="optionTwo">SignIn</span>
        </div>

        <div className="header-optopn">
          <span className="optionone">return</span>
          <span className="optionTwo">Ordering</span>
        </div>

        <div className="header-optopn">
          <span className="optionone">your</span>
          <span className="optionTwo">prime</span>
        </div>

        <div className="header-shop">
          <div className="shopIcon-container">
            <span className="optionicon"></span>

            <span className="optionTwo"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
