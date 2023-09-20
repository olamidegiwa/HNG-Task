import React from "react";
import blockcard1 from "../images/blog card 1.png";
import blockcard2 from "../images/blog card 2.png";
import blockcard3 from "../images/blog card 3.png";

const Section2 = () => {
  return (
    <div className="p-5 blogss">
      <p className="fw-bold fs-3 mb-4">Blogs</p>
      <div className="section2 container">
        <img src={blockcard1} alt="" />
        <img src={blockcard2} alt="" />
        <img src={blockcard3} alt="" />
        <img src={blockcard3} alt="" />
        <img src={blockcard1} alt="" />
        <img src={blockcard2} alt="" />
      </div>
    </div>
  );
};

export default Section2;
