import React from 'react'
import './Contact.css'
import { FaLessThan } from "react-icons/fa";
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
     <div className='bg-brown py-5'>
     <div className='container Contact-form bg-white p-5'>
          <h1 className='title'>Contact us</h1>
          <p className=' text-secondary py-2'>We're open for any suggestion or just to have a chat</p>
          <div className='row'>
            <div className="col-md-4">
              <strong>Address</strong>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="col-md-4">
              <strong>EMAIL:</strong>
              <p><a href="mailto:Sineworknegasi38@gmail.com">Sinework Negasi</a></p>
            </div>
            <div className="col-md-4">
              <strong>Phone:</strong>
              <p>+251966855900</p>
            </div>
          </div>
          <div className='row contact_form py-4'>
            <div className="col-md-4">
              <input type="text" placeholder='Name' className=' input-group p-3' />
            </div>
            <div className="col-md-4 ">
            <input type="text" placeholder='Email' className=' input-group p-3' />
            </div>
            <div className="col-md-4">
            <input type="text" placeholder='Subject' className=' input-group p-3' />
            </div>
            <div className="col-md-12">
            <textarea  id="" rows={10} placeholder='leave Your massage'></textarea>
            </div>
            <button className='btn btn-dark w-25 my-4 p-3'>Send</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default Contact