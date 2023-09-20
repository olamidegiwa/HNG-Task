import React from "react";
import vector1 from "../images/Vector (2).png";
import vector2 from "../images/Vector (3).png";
import vector3 from "../images/Vector (4).png";

const Section1 = () => {
  return (
    <div className="abcd p-5 ">
      <p className="fs-4 fw-bold m-0">Get In Touch</p>
      <p className="m-0 fw-semibold">
        Give us a call to drop by anytime,we endeavour to answer all enquries
      </p>
      <div className="aaa container gap-5">
        <div className="inputtt w-100 p-3 text-start mb-3 mt-5 bg-white">
          <div className="inpu mb-3">
            <input className="p-2 abc w-100" type="text" placeholder="Name" />
            <input
              className="p-2 abc w-100"
              type="text"
              placeholder="Phone Number"
            />
            <input className="p-2 abc w-100" type="text" placeholder="Email" />
            <input
              className="p-2 abc w-100"
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea
            className="w-100 p-2 abc mt-3"
            name=""
            id=""
            cols=""
            rows="15"
            placeholder="Email"
          ></textarea>
          <button className="px33 px-3 py-2 fw-semibold rounded-1 mb-3">
            Send Message
          </button>
        </div>
        <div className="d-flex flex-column abb ">
          <div className="vector p-4 mb-3 gap-2 align-items-center w-100">
            <img className="vector3" src={vector1} alt="" />
            <div className="d-flex flex-column align-items-start w-100 ">
              <p className="m-0 fw-bold fs-3">Phone Number</p>
              <p className="fw-semibold m-0">+2348062704856</p>
              <p className="fw-semibold m-0">+2347080195525</p>
            </div>
          </div>
          <div className="vector p-4 mb-3 gap-2 align-items-center w-100">
            <img className="vector3" src={vector2} alt="" />
            <div className="d-flex flex-column align-items-start w-100">
              <p className="m-0 fw-bold fs-3">Email</p>
              <p className="fw-semibold m-0">olamide@gmail.com</p>
              <p className="fw-semibold m-0">giwa@gmail.com</p>
            </div>
          </div>
          <div className="vector p-4 mb-3 gap-2 align-items-center w-100">
            <img className="vector3" src={vector3} alt="" />
            <div className="d-flex flex-column align-items-start w-100">
              <p className="m-0 fw-bold fs-3">Address</p>
              <p className="fw-semibold m-0">No.5 ogunlesi</p>
              <p className="fw-semibold m-0">No.5 Adewale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
