import React from 'react'
import "./Contact.css"
import ContactUs from '../../images/Image9.png'

const Contact = () => {
  return (
    <>
      <section>
        <div className='container contact'>
            <div className='row justify-content-center'>
                <div className='col-sm-5'>
                    <h6><span>Hire</span> Us</h6>
                    <p>
                    tempor incididunt ut labore
                    et dolore magna aliqua. 
                    Ut enim ad minim veniam,
                    </p>

                    <form >
                        <div className='form-group'>
                            <input placeholder='Enter your name ' type='text' className='form-control' required/>
                        </div>
                        <div className='form-group'>
                            <input placeholder='Enter your Email ' type='email' className='form-control' required/>
                        </div>
                        <div className='form-group'>
                            <textarea rows={6} cols={50} placeholder='Your Message' required></textarea>
                        </div>
                        <button type='submit' className='btn'>Submit</button>
                    </form>
                </div>
                <div className='col-sm-5'>
                    <div className='box'>
                        
                    <img src={ContactUs} alt='' className='img-fluid'/>
                
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
