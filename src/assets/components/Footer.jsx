import React from "react";
import ASEM from "../images/ASEM-logo.png";


const Footer = () => {
  return (
    <div className="ASEMM">
      <div className="d-flex justify-content-between py-4 align-items-center container abcde">
        <img className="ASEM" src={ASEM} alt="" />
        <div className="d-flex gap-5 abcdef">
          <a
            className="fw-semibold text-decoration-none text-dark fs-3"
            href=""
          >
            Home
          </a>
          <a
            className="fw-semibold text-decoration-none text-dark fs-3"
            href=""
          >
            Events
          </a>
          <a
            className="fw-semibold text-decoration-none text-dark fs-3"
            href=""
          >
            Blogs
          </a>
          <a
            className="fw-semibold text-decoration-none text-dark fs-3"
            href=""
          >
            About
          </a>
        </div>
        <button className="px33 px-5 py-3 fw-semibold fs-3 rounded-1 mb-3 m-0">
          Contact Us
        </button>
      </div>
      
    </div>
  );
};

export default Footer;
