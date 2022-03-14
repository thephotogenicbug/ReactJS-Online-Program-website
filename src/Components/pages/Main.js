import React from 'react'
import Contact from './Contact';
import Footer from './Footer';
import './Main.css'
import Services from './Services';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Digital Marketing and Web Development Training In Bangalore
        </title>
        <link rel="canonical" href="https://onlineskills-eduprov.vercel.app/" />
        <meta name="title" content="Digital Marketing and Web Development Training In Bangalore" />
        <meta name="description" content="Digital Marketing and Web Development Training In Bangalore" />

        <meta name="keyword" content="Digital Marketing, Web Development" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://onlineskills-eduprov.vercel.app/" />
        <meta property="og:title" content="Digital Marketing and Web Development Training In Bangalore" />
        <meta property="og:description" content="Digital Marketing and Web Development Training In Bangalore" />
        <meta property="og:image" content="#" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://onlineskills-eduprov.vercel.app/" />
        <meta property="twitter:title" content="Digital Marketing and Web Development Training In Bangalore" />
        <meta property="twitter:description" content="Digital Marketing and Web Development Training In Bangalore" />
        <meta property="twitter:image" content="" />
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
              <Link to="/applicationform.html">
                <button className="heading_button">APPLY NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Main