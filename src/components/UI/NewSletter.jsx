import React from 'react'
import '../../style/NewSletter.css'
const NewSletter = () => {
  return (
    <section className='newsletter'>
        <div className='container'>
            <div className='newsletter_wrapper'>
                <div className='newsletter_content'>
                    <h6 className='subtitle'>Lets work</h6>
                    <h2>Explore the <span className='highlight'>hidden </span>
                    ideas and suscribe!</h2>
                </div>


                <div className='newsletter_form'>
                    <input type='email' placeholder='Email...'/>
                    <button className='secondary_btn subscribe_btn'>Subscribe Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewSletter