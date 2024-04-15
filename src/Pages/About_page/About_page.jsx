import React from "react";
import "./About_page.css";
import About from "../../components/About/About";
import Testimonal from "../../components/Testimonal/Testimonal";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import Statstics from "../../components/Statstics/Statstics";
import Cause from "../../components/Cause/Cause";
import Qoute from "../../components/Qoute/Qoute";
import Voluteer from "../../components/Voluteer/Voluteer";
import Blog from "../../components/Blog/Blog";
import Children from '../../components/Children/Children'

const About_page = () => {
  return (
    <>
    <section className="About_page_section">
      <div className="About_page_section2 d-flex flex-column justify-content-center align-items-center mh-100">
        <div className="text-center d-flex justify-content-center align-items-center gap-2">
          <a className="text-decoration-none" href="/">
            HOME <FaGreaterThan />
          </a>{" "}
          ABOUT US <FaGreaterThan />
        </div>
        <h1 className="text-center title2">About Us</h1>
      </div>
    </section>
    <Children/>
    <Statstics />
    <Voluteer />
    <Testimonal />
    </>
  );
};

export default About_page;
