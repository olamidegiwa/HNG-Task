import React from "react";
import Frame15 from "../images/Frame 15.png";

const Section4 = () => {
  return (
    <div style={{ backgroundColor: "#DAF5F0" }}>
      <div className="d-flex justify-content-between align-items-center bringings">
        <div className="d-flex flex-column text-start align-items-start w-50 container ">
          <p className="fw-bold fs-3 text-start m-0">
            Bringing <span style={{ color: "#FBAF41" }}> Grassroot</span>
          </p>
          <p className="fw-bold fs-3 text-start m-0">
            <span style={{ color: "#FBAF41" }}>Athletes</span> To The Limelight
          </p>
          <p className="text-start fw-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit,
            alias expedita esse architecto debitis delectus totam error cumque
            dolor quibusdam. Accusantium dolores cumque qui, hic ducimus eaque
            facilis harum.
          </p>
          <button className="px33 px-3 py-2 fw-semibold rounded-1 mb-3">
            Send Message
          </button>
        </div>
        <img className="frame15" src={Frame15} alt="" />
      </div>
    </div>
  );
};

export default Section4;
