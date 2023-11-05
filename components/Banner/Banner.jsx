'use client'
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
  return (
  <div className="relative ">
  
 <Carousel 
 autoPlay
 infiniteLoop
 showStatus={false}
 showIndicators={false}
 showThumbs={false}
 interval={5000}
 className='cursor-pointer '
 >
    <div className=""><img  loading='lazy' src=""   alt="" /></div>
    <div className=""><img  loading='lazy' src="" alt="" /></div>
    <div className=""><img  loading='lazy' src=""  alt="" /></div>

 </Carousel>
  </div>
  )
}

export default Banner