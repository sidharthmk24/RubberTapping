import { motion } from 'motion/react'
import React from 'react'
import { fadeIn } from '../Variant'

function Mfeatures() {
  return (
<>
<section class="features1">
    <motion.div 
     variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'}
    
    class="feature-box1">
      <h2>Precise Tapping</h2>
      <p>Ensures accurate cuts on the bark without damaging the cambium layer Maintains consistent depth and angle to maximize latex yield..</p>
    </motion.div>
    <motion.div 
     variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'}class="feature-box2">
      <h2>User-Friendly Design</h2>
      <p>safe blade housing, and intuitive controls.

Lightweight and portable for easy use by workers in plantations.</p>
    </motion.div>
    <motion.div 
     variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'} class="feature-box3">
      <h2>Durability </h2>
      <p>Built with corrosion-resistant and waterproof materials for outdoor use.

Withstands humidity, rain, and daily wear from field conditions.</p>
    </motion.div>
  </section>
</>  )
}

export default Mfeatures