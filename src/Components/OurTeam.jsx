import React from 'react'
import profileImg from '../assets/profile1.jpg'


function OurTeam() {
  return (
<>
 <section class="team-section">
    <div class="team-grid">
      
      <div class="team-member">
        <img src={profileImg} alt="Lyn Bryan"/>
        <h4>Lyn Bryan</h4>
        <p>CEO</p>
      </div>
      <div class="team-member">
        <img src={profileImg} alt="Lauren Pybus"/>
        <h4>Lauren Pybus</h4>
        <p>VP, Growth & Development</p>
      </div>
      <div class="team-member">
        <img src={profileImg} alt="Raelene Thomas"/>
        <h4>Raelene Thomas</h4>
        <p>VP, Finance & Operations</p>
      </div>
      <div class="team-member">
        <img src={profileImg} alt="Mitchell Fawcett"/>
        <h4>Mitchell Fawcett</h4>
        <p>VP, Strategy</p>
      </div>

      
    </div>
  </section>
</>  )
}

export default OurTeam