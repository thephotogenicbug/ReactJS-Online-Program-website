import React from 'react'
import Contact from './Contact';
import './Main.css'
import Services from './Services';
const Main = () => {
  return (
    <>
      <div className="section banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading_title">
              <h1 className="heading_subtitle">
                UNIVERSE OF{" "}
                <span style={{ color: "#A82010" }}>DIGITAL MARKETING</span> AND{" "}
                <br /> <span style={{ color: "#A82010" }}>WEB DEVELOPMENT</span>
              </h1>
               <button className='heading_button'>APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
    </>
  );
}

export default Main