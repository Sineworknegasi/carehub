import React from 'react'
import './Qoute.css'

const Qoute = () => {
  return (
    <section className='Qoute-section'>
        <div className='Qoute-Container py-5'>
        <div className='container py-5'>
            <p className='text-center text-white fs-5 '>CAREHUB CHARITY</p>
            <p className='text-center title2 text-white h1'>
                The Smallest Act Of Kindness Is Worth More Than The Grandest Intention.
            </p>
            <div className='d-flex align-items-center justify-content-center buttons text-center gap-2 my-4'>
                <button className='btn rounded-5 Join-Button-brown px-4 py-3' type='button'>Donate Now</button>
                <button className='btn rounded-5 Join-Button-green px-4 py-3' >Become A volunteer</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Qoute