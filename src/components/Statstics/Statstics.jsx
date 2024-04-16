import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdIncompleteCircle } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import "./Statstics.css";

const Statstics = () => {
  return (
    <section className="container-fluid stat-background">
      <div className="stat-background2">
      <div className="container Stat_section d-flex flex-column py-5">
        <p className="">GREAT REVIES FOR OUR SERVICES</p>
        <h1 className=" fs-1 ">Techinical Statistics</h1>
        <div className="row py-0 py-sm-2 py-md-5">
          <div className=" col-sm-6 col-md-3 d-flex justify-content-center mb-1">
            <div className="stat d-flex flex-column p-3 justify-content-center align-items-center">
              <GiReceiveMoney className="ICON" />
              <h1>$60M</h1>
              <p>FUND RAISED</p>
            </div>
          </div>
          <div className=" col-sm-6 col-md-3 d-flex justify-content-center mb-1">
            <div className="stat d-flex flex-column p-3 justify-content-center align-items-center">
              <MdIncompleteCircle className="ICON" />
              <h1>100+</h1>
              <p>Completed Project</p>
            </div>
          </div>
          <div className=" col-sm-6 col-md-3 d-flex justify-content-center mb-1">
            <div className="stat d-flex flex-column p-3 justify-content-center align-items-center">
              <BiDonateHeart className="ICON" />

              <h1>5800</h1>
              <p>DONATION</p>
            </div>
          </div>
          <div className=" col-sm-6 col-md-3 d-flex justify-content-center mb-1">
            <div className="stat d-flex flex-column p-3 justify-content-center align-items-center">
              <FaHandsHoldingCircle className="ICON" />
              <h1>2,750</h1>
              <p>VOLUNTEER</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Statstics;
