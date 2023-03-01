import React from 'react'
import "./About.css"
import AboutImg from '../../images/Image8.jpg'
const About = () => {
  return (
    <>
      <section>
        <div className='about container'>
            <div className='row justify-content-center'>
                <div className='col-sm-5 '>
                    <img src={AboutImg} alt='' className='img-fluid'/>
                </div>
                <div className='col-sm-5 '>
                   <h6>About <span>Easy Hotel</span></h6>
                   <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
                   <button className='btn'> Read More</button>
                </div>

            </div>
            <div className='row second_rowabout'>
                <h6>Just Come & Visit First</h6>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
