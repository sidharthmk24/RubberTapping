import React, { useRef } from 'react'
import partImg from '../assets/back3.png'
import { motion } from 'motion/react'
import { fadeIn } from '../Variant'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'





function Parts() {

    const gsapRef = useRef()

    useGSAP(()=>{
        gsap.fromTo(gsapRef.current,{
            opacity: 0,
            scale:0.3
            },{
                x: 0,
                opacity: 1,
                duration: 3.5,
                ease: 'power2.out',
                scale:0.8,

          


            scrollTrigger:{
                trigger:".maindiv",
                scroller:"body",
                start:"top 50%",
                end:"bottom 80%",
      
    


            }
            
        })
    })
  return (
<>
<div className="maindiv">
<img ref={gsapRef} src={partImg} alt="" />

</div>
</>  )
}

export default Parts