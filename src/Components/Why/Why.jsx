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
                 <p>
                 Lorem ipsum is a dummy text without any sense.
                  It is a sequence of Latin words that, as they are 
                  positioned, do not form sentences with a complete <br/>
                  sense, but give life to a test text useful to fill spaces that will subsequently be occupied from 
                 ad hoc texts composed by communication professionals<br/>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                 <button className='btn'> View More</button>
            </div>
            </div>
        </section>
    </>
  
  )
}

export default Why