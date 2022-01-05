import React from "react";

import "./bodycontainer.css";

function BodyContainer() {
  return (
    <div className="bolgcard">
      <div className="blogimage">
        <img src="https://picsum.photos/480/240" alt="Blog" />
      </div>
      <div className="blogdescription">
        <div className="blogtitle">
          <h2>This is the title</h2>
        </div>
        <div className="blogdef">
          <p>
            blog, in full Web log or Weblog, online journal where an individual,
            group, or corporation presents a record of activities, thoughts, or
            beliefs. Some blogs operate mainly as news filters, collecting
            various online sources and adding short comments and Internet links.
            Other blogs concentrate on presenting original material. In
            addition, many blogs provide a forum to allow visitors to leave
          </p>
        </div>
        <button className="readbutton">Read more</button>
      </div>
    </div>
  );
}

export default BodyContainer;
