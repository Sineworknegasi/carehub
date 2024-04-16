import React from 'react'
import './Children.css'

const Children = () => {
  return (
    <section className='Children_section pb-0 pb-md-5'>
        <div className='container'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 bg-image'>
                    <div></div>
                </div>
                <div className='col-md-6'>
                    <div className='Children_container'>
                        <p className='title fs-5 text-center text-md-start '>WELCOME TO LOVECARE NON-PROFIT CHARITY</p>
                        <h1 className='title2 text-center text-md-start '>Do You Care Our Children?</h1>
                        <p className=' fs-6'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p className=' fs-6'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <button className='btn rounded-5 border Join-Button-green px-4 py-3 btn-outline-dark'>Be a Volunteer</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Children