import React from "react";
import { FaTwitter, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import "./Voluteer.css";

const VolunteerFiles = [
    {
        name: "Jason Smith",
        image: "https://preview.colorlib.com/theme/lovecare/images/staff-1.jpg",
        discription: "I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        name: "Anne Hayes",
        image: "https://preview.colorlib.com/theme/lovecare/images/staff-2.jpg.webp",
        discription: "I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        name: "Martha Smith",
        image: "https://preview.colorlib.com/theme/lovecare/images/staff-3.jpg.webp",
        discription: "I am an ambitious workaholic, but apart from that, pretty simple person."
    },
    {
        name: "Mike Tyson",
        image: "https://preview.colorlib.com/theme/lovecare/images/staff-4.jpg.webp",
        discription: "I am an ambitious workaholic, but apart from that, pretty simple person."
    }
]

const Volunteermap = VolunteerFiles.map((voluteer) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6 text-white col-12">
            <div className="voluteer-box d-flex flex-column justify-content-center align-items-center py-5 rounded-bottom-4">
              <div className="voluteer-img rounded-circle">
                <img className="w-auto" src={voluteer.image}/>
              </div>
              <div className="voluteer-info  d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-center title m-0 mt-5 fs-2">{voluteer.name}</h1>
                <p className="text-center title fs-5 mt-2">Volunteer</p>
                <ul className="row d-flex flex-row align-items-center justify-content-center gap-1">
                  <a href="" className="col-3">
                    <FaTwitter className="social_icon" />
                  </a>
                  <a href="" className="col-3">
                    <FaFacebook className="social_icon" />
                  </a>
                  <a href="" className="col-3">
                    <FaTiktok className="social_icon" />
                  </a>
                </ul>
                <p className="text-center valunteer-comment">
                  {voluteer.discription}
                </p>
              </div>
            </div>
          </div>
    )
})

const Voluteer = () => {
  return (
    <section className="Voluteer_container py-5">
      <div className="container">
        <p className="text-center py-1 fs-5">MEET OUR VOLUNTEER</p>
        <h1 className="text-center pb-5 fs-1">Our Volunteer</h1>
        <div className="row">
            {Volunteermap}
        </div>
      </div>
    </section>
  );
};

export default Voluteer;
