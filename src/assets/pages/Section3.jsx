import React from "react";
import asem from "../images/ASEM-logo.png";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Section3 = () => {
  return (
    <div className="bgdark">
      <div className="container gap-5  py-5 align-items-center grassroots d-flex">
        <img className="asemm" src={asem} alt="" />
        <div className="d-flex flex-column gap-3 text-start ">
          <p className="text-white text-start m-0">
            Never miss a beat,subscribe to our Newsletter and follow us on socia
            media to stay updated with the latest grassroot sports,
            event,news,exclusive content.
          </p>
          <div className="gap-1 d-flex rootss">
            <input
              className=" px-3 fw-semibold text-white emaill"
              type="text"
              placeholder="Email"
            />
            <button
              className="px-3 border-0 fw-semibold"
              style={{ backgroundColor: "#FBAF41" }}
            >
              subscribe
            </button>
          </div>
        </div>
        <div className="d-flex flex-column">
          <p className="text-white fw-bold">Links</p>
          <p className="m-0 text-white">Home</p>
          <p className="m-0 text-white">Event</p>
          <p className="m-0 text-white">Blog</p>
          <p className="m-0 text-white">About</p>
        </div>
        <div>
          <div className="d-flex flex-column text-start">
            <p className="text-white fw-semibold m-0 fs-5">Socials</p>
            <div className="d-flex text-white align-items-center gap-1">
              <BsFacebook />
              <p className="m-0">Facebook</p>
            </div>
          </div>
          <div className="d-flex text-white align-items-center gap-1">
            <FaInstagram />
            <p className="m-0">Instagram</p>
          </div>
          <div className="d-flex text-white align-items-center gap-1">
            <FiTwitter />
            <p className="m-0">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
