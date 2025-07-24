import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

function Stickyf() {

    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // start sticking when top hits top
  });

  // Optional: fade in/out or animate position
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // stick offset
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);


  return (
 <div className="sticky-main bg-gray-100 p-10">
      <div className="h-[100vh]" /> {/* Filler for scroll */}
      
      <motion.div
        ref={ref}
        style={{ y, opacity }}
        className="sticky top-0 bg-white shadow-md p-4 text-xl font-bold z-50"
      >
        I Stick While Scrolling
        
      </motion.div>

      <div className="h-[100vh]" /> {/* More content */}
    </div>  )
}

export default Stickyf