import React from "react";

import "./header.css";

function Header() {
  return (
    <div className="headerComponet">
      {/* logo #590135 */}

      <img
        className="logocontain"
        src="https://www.clipartmax.com/png/middle/195-1954447_blog-espa%C3%B1ol-blog-icon-transparent-background.png"
        alt="Logo"
      />

      {/* header nav  */}

      <div className="header-nav">
        <div className="header-optopn">
          <span className="optionone">Feeds</span>
          <span className="optionTwo">Home</span>
        </div>

        <div className="header-optopn">
          <span className="optionone">Authour</span>
          <span className="optionTwo">Publish</span>
        </div>

        <div className="header-optopn">
          <span className="optionone">Hello</span>
          <span className="optionTwo">Signin</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
