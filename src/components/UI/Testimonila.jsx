import React from 'react'
import '../../style/testimonial.css'

import ava1 from '../../images/ava-1.jpg'
import ava2 from '../../images/ava-2.jpg'
import ava3 from '../../images/ava-3.jpg'

import Slider from 'react-slick'
const Testimonila = () => {

    const setting={
        dots:false,
        infinite:true,
        speed:1000,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:1,
        slidesToScroll:1,
        swipeToSlide:true
    }
  return (
    <section>
        <div className='container'>
            <div className='slider_content-top'>
                <h6 className='subtitle'>Testimonial</h6>
                <h2>Trusted by more than <span className='highlight'>5,000 customers</span></h2>
            </div>


            <div className='slider_wrapper'>
            <Slider {...setting}>
            <div className='slider_item'>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa dolorem amet molestias exercitationem, aspernatur maiores laboriosam numquam tenetur in soluta! Debitis adipisci fuga vel ipsam ratione voluptas in commodi repellat maiores praesentium incidunt a, deleniti odit obcaecati, dolor harum!</p>
                <div className='customer_details'>
                    <div className='customer_img'>
                        <img alt='wefwe' src={ava1}/>
                    </div>


                    <div className=''>
                        <h5 className='customer_name'>Jerf</h5>
                        <p className='description'>reg,fgefef</p>
                    </div>
                </div>
            </div>

            <div className='slider_item'>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa dolorem amet molestias exercitationem, aspernatur maiores laboriosam numquam tenetur in soluta! Debitis adipisci fuga vel ipsam ratione voluptas in commodi repellat maiores praesentium incidunt a, deleniti odit obcaecati, dolor harum!</p>
                <div className='customer_details'>
                    <div className='customer_img'>
                        <img alt='wefwe' src={ava2}/>
                    </div>


                    <div className=''>
                        <h5 className='customer_name'>Jerf</h5>
                        <p className='description'>reg,fgefef</p>
                    </div>
                </div>
            </div>

            <div className='slider_item'>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsa dolorem amet molestias exercitationem, aspernatur maiores laboriosam numquam tenetur in soluta! Debitis adipisci fuga vel ipsam ratione voluptas in commodi repellat maiores praesentium incidunt a, deleniti odit obcaecati, dolor harum!</p>
                <div className='customer_details'>
                    <div className='customer_img'>
                        <img alt='wefwe' src={ava3}/>
                    </div>


                    <div className=''>
                        <h5 className='customer_name'>Jerf</h5>
                        <p className='description'>reg,fgefef</p>
                    </div>
                </div>
            </div>

         
        </Slider>
            </div>
        </div>


    </section>
  )
}

export default Testimonila