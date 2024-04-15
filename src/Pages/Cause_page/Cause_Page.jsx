import React from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
const Causeinfo = [
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
    cause: "Education",
  },
  {
    title: "Give Food to Homeless People",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://abcnews.go.com/images/International/gty_refugee_crisis_24_jc_150910_3x2_1600.jpg",
    raise: "$9,800",
    goal: "$15,000",
    cause: "Health",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
    cause: "Shelter",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
    cause: "Education",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://abcnews.go.com/images/International/gty_refugee_crisis_24_jc_150910_3x2_1600.jpg",
    raise: "$9,800",
    goal: "$15,000",
    cause: "Shelter",
  },
  {
    title: "Give Food to Homeless Children",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-1.jpg.webp",
    raise: "$9,800",
    goal: "$15,000",
    cause:"Medical"
  },
];

const files = Causeinfo.map((item, index) => {
  return (
    <div className="col-md-6 col-lg-4 ">
      <div className="Cause_card">
        <img className="img-fluid" src={item.image} alt="Images" />
        <div className="btn-education">{item.cause}</div>
        <h5 className="text-center pt-4">{item.title}</h5>
        <p className="text-left px-4">{item.description}</p>
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

const Cause_Page = () => {
  return (
    <>
      <section className="About_page_section">
        <div className="About_page_section2 d-flex flex-column justify-content-center align-items-center mh-100">
          <div className="text-center d-flex justify-content-center align-items-center gap-2">
            <a className="text-decoration-none" href="/">
              HOME <FaGreaterThan />
            </a>{" "}
            CAUSES
            <FaGreaterThan />
          </div>
          <h1 className="text-center title2">Causes Campaign</h1>
        </div>
      </section>
      <div className="container pt-5 bg-brown">
        <div className=" row pt-5 row-gap-3 mb-4">{files}</div>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center text-center w-50 pb-5">
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center"><FaLessThan/></div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">1</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center ">2</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">3</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">4</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">5</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center"><FaGreaterThan /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cause_Page;
