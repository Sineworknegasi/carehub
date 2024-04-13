import React from 'react'
import './Statstics.css'

const Statstics = () => {
  return (
    <section className='container-fluid stat-background'>
        <div className='container Stat_section d-flex flex-column py-5'>
            <p>GREAT REVIES FOR OUR SERVICES</p>
            <h1>Techinical Statistics</h1>
            <div className='row py-5'>
                <div className='col-md-3 d-flex justify-content-center'>
                    <div className='stat d-flex flex-column justify-content-center align-items-center'>
                        <h1>$60M</h1>
                        <p>FUND RAISED</p>
                    </div>
                </div>
                <div className='col-md-3 d-flex justify-content-center'>
                    <div className='stat d-flex flex-column justify-content-center align-items-center'>
                        <h1>100+</h1>
                        <p>Completed Project</p>
                    </div>
                </div>
                <div className='col-md-3 d-flex justify-content-center'>
                    <div className='stat d-flex flex-column justify-content-center align-items-center'>
                        <h1>5800</h1>
                        <p>DONATION</p>
                    </div>
                </div>
                <div className='col-md-3 d-flex justify-content-center'>
                    <div className='stat d-flex flex-column justify-content-center align-items-center'>
                        <h1>2,750</h1>
                        <p>VOLUNTEER</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statstics