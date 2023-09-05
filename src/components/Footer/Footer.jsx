import React from 'react'
import './footer.css'

export const Footer = () => {

    const quickLinks01=[
        {
            path:'#',
            display:'Marketing',
        },
        {
            path:'#',
            display:'Analytics',
        },
        {
            path:'#',
            display:'Commerce',
        },
    ]

    const quickLinks02=[
        {
            path:'#',
            display:'Pricing',
        },
        {
            path:'#',
            display:'Documentation',
        },
        {
            path:'#',
            display:'Guide',
        },
    ]
    const quickLinks03=[
        {
            path:'#',
            display:'About',
        },
        {
            path:'#',
            display:'Jobs',
        },
        {
            path:'#',
            display:'Blog',
        },
    ]
  return (
    <footer>
        <div className='container'>
            <div className='footer_wrapper'>
                <div className='footer_logo'>
                    <h2>Digency</h2>
                    <p className='description'>
                        <p className='small_text decription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque iure quaerat fugiat mollitia esse in minima. Et debitis assumenda corporis!</p>
                    </p>
                </div>


                <div className='footer_quick-links'>
                    <div className='quick_links-title'>Solutions</div>
                    <ul className='quick_links'>
                        {
                            quickLinks01.map((item,index)=>(
                                <li className='quick_link-item' key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                
                <div className='footer_quick-links'>
                    <div className='quick_links-title'>Support</div>
                    <ul className='quick_links'>
                        {
                            quickLinks02.map((item,index)=>(
                                <li className='quick_link-item' key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                
                <div className='footer_quick-links'>
                    <div className='quick_links-title'>Company</div>
                    <ul className='quick_links'>
                        {
                            quickLinks03.map((item,index)=>(
                                <li className='quick_link-item' key={index}>
                                    <a href={item.path}>{item.display}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
