import React from 'react'
import "./Why.css"
import Whyimg from '../../images/Image1.jpg'
const Why = () => {
  return (
    <>
        <section>
            <div className='why_choose'>
                <div>
                    <div className='imgholder'>
                        <img src={Whyimg} alt='' />
                    </div>
                    <div className='headerOverlay'></div>
                </div>
             <div className='whyContent'>
                 <h4>We Provide Everything You Need</h4>
            </div>
            </div>
        </section>
    </>
  
  )
}

export default Why