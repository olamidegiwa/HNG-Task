import React from "react";
import vector5 from "../images/Vector (5).png";

const Section7 = () => {
  return (
    <div style={{ backgroundColor: "#daf5f0" }}>
      <div className="d-flex align-items-center daf5f0ss">
        <img className="vector5 p-5" src={vector5} alt="" />
        <div className="d-flex flex-column p-5 Aliquids">
          <p className="fw-bold fs-5 text-start text-black mb-5 w-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            inventore distinctio! Similique quos eligendi ad iusto doloremque
            animi laudantium! Aperiam architecto aspernatur nisi eius error.
          </p>
          <ul className="text-start fw-semibold">
            <li>Training Resources</li>
            <li>Event Promotions</li>
            <li>Community Forum</li>
            <li>Grant And Sponsorship</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section7;
