import React from 'react'
import FeatureImg from '../assets/back2.png'
import { motion } from 'motion/react'
import { fadeIn } from '../Variant'
import { Link } from 'react-router-dom'




function Feature() {
  return (
<>
 {/* <div class="container">
    <div class="image-section">
      <img src={FeatureImg} alt="Smart Speaker"/>
    </div>

    <div class="content1">
      <motion.h1 
      variants={fadeIn('up',0.1)}
initial='hidden'
whileInView={'show'}

      >RUBBER TAPPER</motion.h1>
      <motion.p 
              variants={fadeIn('up',0.1)}
initial='hidden'
whileInView={'show'}>
        Designed to reduce hand fatigue during long tapping sessions with a comfortable, non-slip grip.</motion.p>
     <Link to={'Product'}>
      <motion.a
                    variants={fadeIn('up',0.1)}
initial='hidden'
whileInView={'show'}
      class="btn1" href="#">Shop Now!</motion.a>
     </Link>

      <div class="features">
        <motion.div 
                            variants={fadeIn('right',0.1)}
initial='hidden'
whileInView={'show'}
        class="feature">
          <div class="feature-icon">🔊</div>
          <div>
            <h3>Hardened Steel Blade</h3>
            <p>Durable, rust-resistant blade designed to retain sharpness and make clean, efficient cuts.</p>
          </div>
        </motion.div>

 <motion.div 
                            variants={fadeIn('left',0.1)}
initial='hidden'
whileInView={'show'}     
        class="feature">
          <div class="feature-icon">🔋</div>
          <div>
            <h3>Integrated Bark Guard</h3>
            <p>A small protective plate that prevents over-cutting and minimizes damage to the tree bark.</p>
          </div>
        </motion.div>

<motion.div 
                            variants={fadeIn('right',0.1)}
initial='hidden'
whileInView={'show'}     
        class="feature">          <div class="feature-icon">🎤</div>
          <div>
            <h3>Built-in Angle Guide</h3>
            <p>Ensures optimal tapping angle for maximum latex yield and consistency across cuts.</p>
          </div>
        </motion.div>

<motion.div 
                            variants={fadeIn('left',0.1)}
initial='hidden'
whileInView={'show'}     
        class="feature">          <div class="feature-icon">🏠</div>
          <div>
            <h3>Replaceable Blade Cartridge System</h3>
            <p >Simplifies maintenance by allowing quick blade replacement without special tools.</p>
          </div>
        </motion.div>
      
      
      
      </div>
    </div>
  </div> */}


   <div className="f-container">
    <div className="image-section">
      <img className='feature-image' src={FeatureImg} alt="Smart Speaker" />
    </div>

    <div className="content1">
      <motion.h1 variants={fadeIn('up', 0.1)} initial="hidden" whileInView="show">
        RUBBER TAPPER
      </motion.h1>

      <motion.p variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show">
        Designed to reduce hand fatigue during long tapping sessions with a comfortable, non-slip grip.
      </motion.p>

      <Link to="Product">
        <motion.a className="btn1" variants={fadeIn('up', 0.1)} initial="hidden" whileInView="show">
          Shop Now!
        </motion.a>
      </Link>

      <div className="features">
        <motion.div className="feature" variants={fadeIn('right', 0.1)} initial="hidden" whileInView="show">
          <div className="feature-icon">🔊</div>
          <div>
            <h3>Hardened Steel Blade</h3>
            <p>Durable, rust-resistant blade designed to retain sharpness and make clean, efficient cuts.</p>
          </div>
        </motion.div>

        <motion.div className="feature" variants={fadeIn('left', 0.2)} initial="hidden" whileInView="show">
          <div className="feature-icon">🔋</div>
          <div>
            <h3>Integrated Bark Guard</h3>
            <p>Prevents over-cutting and minimizes damage to the tree bark.</p>
          </div>
        </motion.div>

        <motion.div className="feature" variants={fadeIn('right', 0.3)} initial="hidden" whileInView="show">
          <div className="feature-icon">🎤</div>
          <div>
            <h3>Built-in Angle Guide</h3>
            <p>Ensures optimal tapping angle for maximum latex yield and consistent cuts.</p>
          </div>
        </motion.div>

        <motion.div className="feature" variants={fadeIn('left', 0.4)} initial="hidden" whileInView="show">
          <div className="feature-icon">🏠</div>
          <div>
            <h3>Replaceable Blade Cartridge System</h3>
            <p>Simplifies maintenance by allowing quick blade replacement without tools.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </div> 
</>  )
}

export default Feature