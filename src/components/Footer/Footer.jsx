import React from "react";
import "./Footer.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="Footer_section pt-5">
      <div className="container-xl py-5">
        <div className="row">
          <div className="col-md-4 text-sm-center">
            <h1 className="Brand_Name pb-4">
              CARE<span>HUB</span>
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="footer_social">
              <div className="row d-flex flex-row justify-content-center gap-4">
                <div className="col-1">
                  <a href="#!">
                    <FaTwitterSquare className=" fs-1" />
                  </a>
                </div>
                <div className="col-1">
                  <a href="#!">
                    <FaInstagramSquare className=" fs-1" />
                  </a>
                </div>
                <div className="col-1">
                  <a href="#!">
                    <FaFacebookSquare className=" fs-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <h1 className="text-center">Recent Posts</h1>
            <div className="row py-3">
              <div className="col-md-2"></div>
              <div className="col-md-10 text-sm-center">
                <div>< FaCalendarAlt/> Feb. 22, 2021 <FaUser/> Admin</div>
                <div>Ecological System Responsible for Green Energy</div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-2"></div>
              <div className="col-md-10 text-sm-center">
                <div> < FaCalendarAlt/> Feb. 22, 2021 <FaUser/> Admin</div>
                <div>Ecological System Responsible for Green Energy</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column gap-3 text-sm-center">
            <h1 className="text-center">Have a Questions?</h1>
            <div className="row d-flex flex-sm-row justify-content-center align-items-center text-sm-start">
                <div className="col-xs-1 col-sm-1 col-md-1"><FaMapMarked className=" fs-3"/></div>
                <div className="col-xs-10 col-sm-10 col-md-10">	203 Fake St. Mountain View, San Francisco, California, USA</div>
            </div>
            <div className="row d-flex justify-content-center align-items-center text-sm-start">
                <div className="col-xs-1 col-sm-1 col-md-1">< FaPhoneAlt className=" fs-4"/></div>
                <div className="col-xs-10 col-sm-10 col-md-10">+2 392 3929 210</div>
            </div>
            <div className="row d-flex flex-row justify-content-center align-items-center text-sm-start">
                <div className="col-xs-1 col-sm-1 col-md-1"><MdMessage className=" fs-3"/></div>
                <div className="col-xs-10 col-sm-10 col-md-10">	203 Fake St. Mountain View, San Francisco, California, USA</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_codyright">
        <p className="w-100 text-center fs-5 py-5 m-0"> Copyright {new Date().getFullYear()} Developed by SINEWORK NEGASI </p>
      </div>
    </section>
  );
};

export default Footer;
