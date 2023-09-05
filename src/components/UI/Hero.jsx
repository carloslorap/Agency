import React from 'react'
import '../../style/hero.css'
import heroDarkImg from '../../images/hero-img.png'
import lightImg from '../../images/light-hero-bg.jpg'


const Hero = ({theme}) => {
  return (
    <section className='hero_section'>
      <div className='container'>
          <div className='hero_wrapper'>
            <div className='hero_content'>
              <div className=''>
              <h2>Were Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className='highlight'>Promote Your Brand</h2>
              </div>
              <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloribus reiciendis at molestiae asperiores ullam.</p>

              <div className='hero_btns'>
                  <button className='primary_btn'>Get Started Now</button>
                  <button className='secondary_btn'>Discover More</button>
              </div>
          
            </div>

            <div className='hero_img'>
              <img src={theme==='light-theme' ? lightImg:heroDarkImg} alt='ef'/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero