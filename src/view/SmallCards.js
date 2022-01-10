import React from "react";

import "./smallcard.css";

function SmallCards() {
  return (
    <div className="smallcards">
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
            beliefs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmallCards;
