import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css"; // requires a loader
import { Slide } from "react-slideshow-image";
import "./Testimonal.css";

const testimonial = [
    {
        name:"Roger Scott",
        image:"https://preview.colorlib.com/theme/lovecare/images/person_2.jpg.webp",
        jop: "Marketing Manager",
    },
    {
        name:"Roger Scott",
        image:"https://preview.colorlib.com/theme/lovecare/images/person_3.jpg.webp",
        jop: "Marketing Manager",
    },
    {
        name:"Roger Scott",
        image:"https://preview.colorlib.com/theme/lovecare/images/person_4.jpg.webp",
        jop: "Marketing Manager",
    }
]

const testi = testimonial.map ((person) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
        <div className=" d-flex flex-column-reverse testimonial_card my-2 px-4 py-3 pt-5 rounded-2">
          <FaQuoteLeft className="quote_icon rounded-circle" />
          <p>
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="testimonial_profile d-flex flex-row gap-md-2 gap-2 mb-3">
            <img
              src={person.image}
              alt=""
              width={60}
              className="rounded-circle"
            />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="test-name fs-2">Roger Scott</h3>
              <span className=" fw-bold">Marketing Manager</span>
            </div>
          </div>
        </div>
      </div>
    )
})

const Testimonal = () => {
  return (
    <section className="Testimonal_section">
      <div className="Testimonal py-5">
        <div className=" container-xxl">
          <p className="text-center fs-2">TESTIMONIAL</p>
          <h1 className="text-center fs-0">What People Says</h1>
          <div className="row pt-5 mt-5 gap-xs-1 gap-sm-0 col-gap-2 gap-md-0 gap-lg-0 ">
            {testi}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
