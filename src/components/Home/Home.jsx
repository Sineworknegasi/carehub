import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fuild Home-section d-flex">
      <div className="container d-flex flex-column Home_container">
        <p className="p1">Raising Hope</p>
        <h1>
          To the Homeless & <br /> Hopeless People
        </h1>
        <div className="row">
          <button className="Join-Button">
            Join Us <FaArrowRight />
          </button>

          <p class="watch-video">
            Watch the Video <FaPlay />
          </p>
        </div>
        <div className="row">
          <div className=""></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
