import React from 'react'
import './Children.css'

const Children = () => {
  return (
    <section className='Children_section pb-5'>
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 bg-image'>
                    <div></div>
                </div>
                <div className='col-md-6'>
                    <div className='Children_container'>
                        <p className='title'>WELCOME TO LOVECARE NON-PROFIT CHARITY</p>
                        <h1 className='title2 '>Do You Care Our Children?</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <button className='btn rounded-5 Join-Button-green px-4 py-3 btn-outline-dark'>Be a Volunteer</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Children