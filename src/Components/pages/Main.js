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
        <meta
          name="title"
          content="Digital Marketing and Web Development Training In Bangalore"
        />
        <meta
          name="description"
          content="Digital Marketing and Web Development Training In Bangalore"
        />

        <meta
          name="keyword"
          content="digital marketing courses in bangalore,web designing in bangalore,web development training in bangalore,digital marketing training in bangalore,web development course in bangalore,digital marketing institute in bangalore,digital marketing training institute in bangalore,best digital marketing training institute in bangalore,best digital marketing course in bangalore,full stack developer course in bangalore,best digital marketing institute in bangalore,digital marketing course fees in bangalore,top digital marketing courses in bangalore,digital marketing courses in bangalore with placement,top digital marketing training institute in bangalore,ui development training in bangalore,web designing course bangalore,full stack developer course with placement in bangalore,digital marketing courses in bangalore marathahalli,java full stack developer course in bangalore,digital marketing colleges in bangalore,online digital marketing courses in bangalore,full stack development course in bangalore,digital marketing classes in bangalore,web designing training in bangalore,marketing courses in bangalore,full stack course in bangalore,full stack web development course in bangalore,best digital marketing training in bangalore,top 10 digital marketing institutes in bangalore,best institute for full stack developer in bangalore,web developer course in bangalore,digital academy 360 bangalore,best digital marketing courses in bangalore with placement,full stack developer course in bangalore with placement,email marketing training in bangalore,top digital marketing institute in bangalore,full stack developer course bangalore,digital marketing training course in bangalore,full stack developer training institutes in bangalore,web development institute in bangalore,national institute of digital marketing bangalore,web development course in bangalore with placement,mean stack training with placement guarantee bangalore,social media marketing courses in bangalore,best web development institute in bangalore,mean stack training in bangalore,best digital marketing courses bangalore,full stack development training in bangalore,
          digital marketing training institute bangalore,best full stack developer course institute in bangalore,digital marketing academy bangalore,best institute for web development in bangalore,web development course in bangalore fees,web development training institute in bangalore,digital marketing coaching in bangalore,digital marketing online courses in bangalore,full stack web developer course in bangalore,web designing course with placement in bangalore,top digital marketing courses bangalore,digital marketing academy in bangalore,digital marketing fees in bangalore,digital marketing offline course in bangalore,best web development courses in bangalore,digital marketing course institute in bangalore,web development course fees in bangalore,learn digital marketing in bangalore,digital marketing course price in bangalore,digital marketing courses in rajajinagar bangalore,front end developer training in bangalore,best web development training institute in bangalore,web development coaching in bangalore,advanced digital marketing course in bangalore,best institute for digital marketing course in bangalore,masters in digital marketing bangalore,website development course in bangalore,full stack web development training in bangalore,top 10 digital marketing courses in bangalore,digital marketing courses online bangalore,digital marketing courses in btm layout bangalore,digital marketing courses in bangalore with 100 placement,web development courses in bangalore vijayanagar,front end development training in bangalore,diploma in digital marketing in bangalore,best full stack development training in bangalore,mean stack developer training in bangalore,digital marketing courses in vijayanagar bangalore,web designing and development course in bangalore,mean stack course in bangalore,digital marketing courses in electronic city bangalore,digital marketing certification courses in bangalore,best training institute for web development in bangalore"/>

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://onlineskills-eduprov.vercel.app/"
        />
        <meta
          property="og:title"
          content="Digital Marketing and Web Development Training In Bangalore"
        />
        <meta
          property="og:description"
          content="Digital Marketing and Web Development Training In Bangalore"
        />
        <meta property="og:image" content="#" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://onlineskills-eduprov.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Digital Marketing and Web Development Training In Bangalore"
        />
        <meta
          property="twitter:description"
          content="Digital Marketing and Web Development Training In Bangalore"
        />
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