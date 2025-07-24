import React, { useState } from 'react'


function Faq() {

const faqData = [
  {
    question: "What is a this  tool used for?",
    answer: "Ourtool is specifically designed to make precise incisions in the bark of rubber trees to extract latex without damaging the tree’s growth tissue. It helps ensure efficient latex flow and long-term tree health.",
  },
  {
    question: "How often should I sharpen my rubber tapping knife?",
    answer: "To maintain clean and effective cuts, the knife should be sharpened every few days, or sooner if the latex flow decreases or the cuts become uneven. A properly sharpened blade also reduces strain and increases tapping speed.",
  },
  {
    question: "Can this tool be used on all rubber tree species?",
    answer: "Yes, most standard rubber tapping tools are suitable for all commercial rubber tree species (like Hevea brasiliensis), though technique and incision depth may need to be adjusted depending on bark thickness.",
  },
  {
    question: "Is the tool safe for beginners to use?",
    answer: "With proper training and care, yes. However, rubber tapping requires skill to avoid harming the tree. Beginners should practice under guidance to learn the correct angle and pressure for tapping.",
  },
  {
    question: "What materials are rubber tapping tools made of?",
    answer: "High-quality rubber tapping knives are typically made from carbon steel or stainless steel for sharpness and durability. The handle is often made from wood or ergonomic rubber for a comfortable grip during long use.",
  },
];



  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
<>
    <div className="faq-section">
      <h2 className="faq-title  ">FaQ's</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => toggle(index)}
          >
            <span>{item.question}</span>
            <span className="faq-icon">
              {openIndex === index ? '▴' : '▾'}
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
</>  )
}

export default Faq