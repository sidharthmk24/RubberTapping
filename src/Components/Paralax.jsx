import React from 'react'
import { Link } from 'react-router-dom'
import { fadeIn, fadeUp } from '../Variant'
import { motion } from 'motion/react'


function Paralax() {
  return (
<>
<section id="section4" className="paralax-section4">
  <div className="p-container1" id="about">
    <motion.h1
      variants={fadeUp('up', 0.5)}
      initial="hidden"
      whileInView="show"
      className="ph3"
    >
      Grab Your Product
    </motion.h1>
    
    <Link to="Product" className="p-link">
      <motion.button
        variants={fadeUp('up', 0.5)}
        initial="hidden"
        whileInView="show"
        className="btn2"
      >
        ORDER NOW
      </motion.button>
    </Link>
  </div>
</section>
</>
       )
}

export default Paralax