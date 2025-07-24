import React, { useState } from 'react'
import { fadeOn } from '../Variant';
import { motion } from 'motion/react';
motion

const testimonials = [
  {
    text: "“This rubber tapping machine has cut my tapping time in half. Its fast, precise, and reduces wastage. A total game changer for our plantation!”"
,
    author: "Ravi N., Kerala."
  },
  {
    text: "Very user-friendly! Even our new workers learned how to operate it in a day. The grip is comfortable and the blade glides smoothly.",
    author: "Sarah T., Malaysia."
  },
  {
    text: "We’ve used it daily for months in tough field conditions and it’s still going strong. Solid build and dependable performance!",
    author: " Daniel P., Thailand."
  },
    {
    text: "Since switching to this machine, we’ve noticed a clear increase in latex output. It ensures consistent cuts without damaging the trees.",
    author: "Aye Win, Myanmar"
  },
    {
    text: "Before this tool, our team struggled with back and wrist strain. Now they finish the same work faster with less physical effort.",
    author: "James M., Sri Lanka."
  },{
      text: "It’s reasonably priced for the value it delivers. Easily one of the best investments for our rubber estate.",
    author: "Nurul H., Indonesia."
  }
];

function Testimonials() {

     const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };



  return (
<>
  <section className="testimonial-section">

      <div className="testimonial-slider">
        <button className="nav-btn" onClick={goToPrev}>&#8249;</button>

         < motion.div
          variants={fadeOn('up', 0.5)}
                   initial='hidden'
                   whileInView={'show'}
         className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="slide" key={index}>
                <blockquote>
                  <p className="quote">
                    "{testimonial.text.replace("AMAZING!!", <span className="highlight">AMAZING!!</span>)}"
                  </p>
                  <footer>-{testimonial.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </ motion.div>

        <button className="nav-btn" onClick={goToNext}>&#8250;</button>
      </div>
    </section>
</>  )
}

export default Testimonials