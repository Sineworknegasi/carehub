import React from "react";
import "react-slideshow-image/dist/styles.css"; // requires a loader
import { Slide } from "react-slideshow-image";
import "./Cause.css";

const Causeinfo = [
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
  },
  {
    title: "Give Food to Homeless People",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://abcnews.go.com/images/International/gty_refugee_crisis_24_jc_150910_3x2_1600.jpg",
    raise: "$9,800",
    goal: "$15,000",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://abcnews.go.com/images/International/gty_refugee_crisis_24_jc_150910_3x2_1600.jpg",
    raise: "$9,800",
    goal: "$15,000",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
  },
];

const files = Causeinfo.map((item, index) => {
  return (
    <div className="col-md-11">
      <div className="Cause_card">
        <img className="img-fluid img-responsive" src={item.image} alt="Images" />
        <div className="btn-education">Education</div>
        <h5 className="text-center fs-1  pt-4">{item.title}</h5>
        <p className="text-left px-4 fs-6 ">{item.description}</p>
        <div className="fund_rate d-flex flex-column">
          <div className="rate pt-3  text-center d-flex flex-column justify-content-center align-items-center">
            <div className="rate-inner my-3"></div>
          </div>
          <div className="d-flex flex-row justify-content-between px-4">
            <p>
              Raised: <strong>{item.raise}</strong>
            </p>
            <p>
              Goal:{" "}
              <strong style={{ color: "var(--green)" }}>{item.goal}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

const Cause = () => {
  return (
    <section className="cause-Section container-fluid py-4">
      <div className="container pt-5">
        <h1 className="text-center title fs-3">OUR CAUSES</h1>
        <p className="text-center title2 fs-1">Our Causes & Help Us</p>
        <div className="row pt-5 row-gap-3 mb-4">
          <Slide
          duration={2000}
            slidesToScroll={1}
            slidesToShow={1}
            responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                  },
                },
  
            ]}
          >
            {files}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Cause;
