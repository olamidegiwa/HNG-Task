import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdMovieEdit } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const Section6 = () => {
  return (
    <div className=" p-4" style={{ backgroundColor: "#C4A1FF" }}>
      <p className="fw-bold fs-4 text-black">Empowering Grassroot Athlete</p>
      <div className="d-flex justify-content-around container gap-5 sportlights">
        <div className="d-flex flex-column align-items-center mdsearch py-4 px-3 w-100 bg-white">
          <IoMdSearch className="fs-1" style={{ color: "#26215F" }} />
          <p className="fw-bold text-black m-0">Athlete Sportlight</p>
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis magni debitis eaque culpa, quia dolore delectus
            blanditiis pariatur similique possimus.
          </p>
        </div>
        <div className="d-flex flex-column align-items-center mdsearch py-4 px-3 w-100 bg-white">
          <MdMovieEdit className="fs-1" style={{ color: "#26215F" }} />
          <p className="fw-bold text-black m-0">Behind The Scenes</p>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            tempora maxime dolores deserunt aut odit, veritatis temporibus quis
            eligendi saepe?
          </p>
        </div>
        <div className="d-flex flex-column align-items-center mdsearch py-4 px-3 w-100 bg-white">
          <IoIosPeople className="fs-1" style={{ color: "#26215F" }} />
          <p className="fw-bold text-black m-0">Community Corner</p>
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum
            nulla quo possimus repellendus porro obcaecati omnis. Provident,
            veniam porro?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
