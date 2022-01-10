import React from "react";

import "./blogbody.css";
import BodyContainer from "./BodyContainer";

function BlogBody() {
  return (
    <div className="blogmain">
      <div className="Bloghead">
        <h1>Top stories</h1>
      </div>
      <div className="blogbody">
        <BodyContainer />
        <BodyContainer />
      </div>
    </div>
  );
}

export default BlogBody;
