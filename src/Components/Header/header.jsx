import React from 'react'
import './header.css'
import Typed from 'typed.js'
import HeaderImg from '../../images/bg.jpg'
import Custom1 from '../../images/Image5.jpg'
import Custom2 from '../../images/Image6.jpg'
import Custom3 from '../../images/Image7.jpg'

import { useEffect,useRef } from 'react'

const Header = () => {
  const el = useRef(null)
  useEffect(()=>{
      new Typed(el.current,{
      strings:['Room','Meal','Environment','Vibe'],
      startDelay:300,
      backSpeed:100,
      backDelay:100,
      typeSpeed:100,
      loop:true,
      showCursor:true
    })
  })

  return (
    <>
    <section>
      <div className='header'>
        <div>
            <div className='ImageHolder'>
              <img src={HeaderImg} alt=''/>
            </div>
            <div className='headerOverlay'></div>
        </div>
        <div className='HeaderContent'>
            <h1>We Provide Everything You Need<br/> <span ref={el}></span></h1>
        </div>
      </div>
    </section>
    {/* Custom Section Start */}
    <section>
      <div className='custom container'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='box'>
              <img src={Custom1} alt='' className='img-fluid'/>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='box'>
              <img src={Custom2} alt='' className='img-fluid'/>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='box'>
              <img src={Custom3} alt='' className='img-fluid'/>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default Header