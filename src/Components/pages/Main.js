import React from 'react'
import Contact from './Contact';
import Footer from './Footer';
import './Main.css'
import Services from './Services';
import { Helmet } from "react-helmet";
const Main = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Digital Marketing and Web Development Training In Bangalore
        </title>
        <link rel="canonical" href="https://onlineskills-eduprov.vercel.app/" />
        <meta name="description" content="Digital Marketing and Web Development Training In Bangalore" />
        <meta name="keyword" content="Digital Marketing, Web Development" />
      </Helmet>
      <div className="section banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 heading_title">
              <h1 className="heading_subtitle">
                UNIVERSE OF{" "}
                <span style={{ color: "#A82010" }}>DIGITAL MARKETING</span> AND{" "}
                <br /> <span style={{ color: "#A82010" }}>WEB DEVELOPMENT</span>
              </h1>
              <button className="heading_button">APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Main