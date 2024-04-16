import React from 'react'
import './Contact.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FaGreaterThan } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <section className="About_page_section">
        <div className="About_page_section2 d-flex flex-column justify-content-center align-items-center mh-100">
          <div className="text-center d-flex justify-content-center align-items-center gap-2">
            <a className="text-decoration-none" href="/">
              HOME <FaGreaterThan />
            </a>{" "}
            CONTACT
            <FaGreaterThan />
          </div>
          <h1 className="text-center title2">Contact Us</h1>
        </div>
      </section>
     <div className='bg-brown d-flex justify-content-center '>
     <div className='container row d-flex justify-content-center align-items-md-start Contact-form bg-white p-0 p-sm-3 p-md-5'>
          <div className="col-12 col-md-6 p-3">
          <h1 className='title'>Contact us</h1>
          <p className=' text-secondary py-2 fs-4'>We're open for any suggestion or just to have a chat</p>
          <div className='row'>
            <div className="col-md-12 d-flex justify-content-left align-items-center gap-2">
            <IoLocationSharp className=" fs-2 bg-body-secondary p-1 rounded-circle" />
              <div>
                <strong className='fs-6'>Address</strong>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-left align-items-center gap-2">
              <FaPhoneAlt className=" fs-2 bg-body-secondary p-1 rounded-circle" />
              <div>
                <strong>EMAIL:</strong>
                <p><a href="mailto:Sineworknegasi38@gmail.com">Sinework Negasi</a></p>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-left align-items-center gap-2">
              <FaTelegramPlane className=" fs-2 bg-body-secondary p-1 rounded-circle" />
              <div>
                <strong>Phone:</strong>
                <p>+251966855900</p>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-left align-items-center gap-2">
              <GiWorld className=" fs-2 bg-body-secondary p-1 rounded-circle" />
              <div>
                <strong>Website:</strong>
                <p><a href="www.sinework.pages.dev">Sinework.Dev</a></p>
              </div>
            </div>
          </div>
          </div>
          <div className='col-12 col-md-6 row contact_form py-4'>
            <div className="col-md-10">
              <input type="text" placeholder='Name' className=' input-group p-3' />
            </div>
            <div className="col-md-10 ">
            <input type="text" placeholder='Email' className=' input-group p-3' />
            </div>
            <div className="col-md-10">
            <input type="text" placeholder='Subject' className=' input-group p-3' />
            </div>
            <div className="col-md-10">
            <textarea  id="" rows={10} placeholder='leave Your massage'></textarea>
            </div>
            <div className="col-md-4">
            <button className='btn btn-outline-dark w-100'>Send</button>
            </div>

          </div>
        </div>
     </div>
    </>
  )
}

export default Contact