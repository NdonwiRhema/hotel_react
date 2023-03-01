import React from 'react'
import "./Offer.css"
import Offer1 from '../../images/Image2.jpg'
import Offer2 from '../../images/Image3.jpg'
import Offer3 from '../../images/Image4.jpg'

const Offer = () => {
  return (
    <>
        <section>
            <div className='offer container'>
                <div className='content'>
                    <h6>What we Offer</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod
                     <br/>   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   </p>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='box'>
                            <img className='img-fluid' src={Offer1} alt=''/>
                        
                            <div className='boxContent'>
                                <h6> Hotel Services</h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod
                     <br/>   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='box'>
                            <img className='img-fluid' src={Offer2} alt=''/>
                        
                            <div className='boxContent'>
                                <h6> Hotel Services</h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod
                     <br/>   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='box'>
                            <img className='img-fluid' src={Offer3} alt=''/>
                        
                            <div className='boxContent'>
                                <h6> Hotel Services</h6>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod
                     <br/>   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

    </>
  )
}

export default Offer
