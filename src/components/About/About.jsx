import React from "react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { RiCommunityFill } from "react-icons/ri";
import { FaHandSparkles } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section className="container-fluid text-white h-100 A_section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 left-A-section">
            <p className="text-left">WELCOME TO CAREHUB CHARITY</p>
            <h1 className="text-left">
              We Help Thousands of Children to Get Their Education
            </h1>
            <p className="text-left">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <div className="row d-flex align-items-center">
              <div className="col-md-3  d-flex flex-column About-Box ">
                <BiSolidDonateHeart className="icon" />
                <p className="text-center">Start Donating</p>
              </div>
              <div className="col-md-3  d-flex flex-column About-Box ">
                <RiCommunityFill className="icon" />
                <p className="text-center">Join Our Community</p>
              </div>
              <div className="col-md-3  d-flex flex-column About-Box ">
                <FaHandSparkles className="icon" />
                <p className="text-center"> Be a Volunteer</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-5 right-About-section">
            <label>DONATE NOW</label>
            <h2>Giving is the greatest act of grace</h2>
            <label>Your full Name</label>
            <input type="text" placeholder="Your Full Name" />
            <label>Email Address</label>
            <input type="email" placeholder="Email" />
            <label>Select Causes</label>
            <select>
              <option value="1">Education</option>
              <option value="2">Health</option>
              <option value="3">Family</option>
              <option value="4">Sports</option>
              <option value="5">Entertainment</option>
              <option value="6">Others</option>
            </select>
            <label>Amount to Give</label>
            <input type="text" placeholder="Amount" />
            <div className=" form-group d-flex row my-2 mb-5">
              <div className="Form-check d-flex col-md-3 align-items-center">
                <input type="radio" className="form-check-input mx-1" name="flexRadioDefault" id="FlexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">Paypal</label>
              </div>
              <div className="Form-check d-flex col-md-4 align-items-center">
                <input type="radio" className="form-check-input" name="flexRadioDefault" id="FlexRadioDefault2" />
                <label className="form-check-label mx-1" for="flexRadioDefault2"> CreditCard </label>
              </div>
              <div className="Form-check d-flex col-md-3 align-items-center">
                <input type="radio" className="form-check-input mx-1" name="flexRadioDefault" id="FlexRadioDefault2" />
                <label className="form-check-label" for="flexRadioDefault2">Payoneer</label>
              </div>
            </div>
            <button className="btn btn-block button-brown p-3">Donate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
