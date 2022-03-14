import React from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const FrontendBlog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Frontend Web Development Training in Bangalore</title>
        <link rel="canonical" href="https://onlineskills-eduprov.vercel.app/" />
        <meta
          name="description"
          content="Frontend Web Development Training in Bangalore"
        />
        <meta name="keyword" content="Digital Marketing, Web Development" />
      </Helmet>
      <div className="backend_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="backend_title">FrontEnd Development</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h2>What Is a Front-End Developer?</h2>
            <p style={{ textAlign: "justify" }}>
              <b>Front-end web development</b>, also known as client-side
              development is the practice of producing HTML, CSS and JavaScript
              for a website or Web Application so that a user can see and
              interact with them directly. The challenge associated with front
              end development is that the tools and techniques used to create
              the front end of a website change constantly and so the developer
              needs to constantly be aware of how the field is developing.
            </p>
            <p style={{ textAlign: "justify" }}>
              The objective of designing a site is to ensure that when the users
              open up the site they see the information in a format that is easy
              to read and relevant. This is further complicated by the fact that
              users now use a large variety of devices with varying screen sizes
              and resolutions thus forcing the designer to take into
              consideration these aspects when designing the site. They need to
              ensure that their site comes up correctly in different browsers
              (cross-browser), different operating systems (cross-platform) and
              different devices (cross-device), which requires careful planning
              on the side of the developer.
            </p>
            <label className="fw-bold">HTML, CSS, & JavaScript:</label>
            <p className="text-justify" style={{ textAlign: "justify" }}>
              A front-end developer architects and develops websites and
              applications using web technologies (i.e., HTML, CSS, DOM, and
              JavaScript), which run on the Open Web Platform
            </p>
            <label className="fw-bold">
              Welcome to our front-end web developer learning pathway!
            </label>
            <p style={{ textAlign: "justify" }}>
              Here we provide you with a structured course that will teach you
              all you need to know to become a front-end web developer. Work
              through each section, learning new skills (or improving existing
              ones) as you go along. Each section includes exercises and
              assessments to test your understanding before you move forward.
            </p>
            <label className="fw-bold">Subjects covered</label>
            <ol>
              <li>
                HTML, the language that gives web content structure and meaning
              </li>
              <li>CSS, the language used to style web pages</li>
              <li>
                JavaScript, the scripting language used to create dynamic
                functionality on the web
              </li>
              <li>
                React.js an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications
              </li>
            </ol>
            <h3>Prerequisites</h3>
            <p>
              You don't need any previous knowledge to start this course. All
              you need is a computer that can run modern web browsers, an
              internet connection, and a willingness to learn.
            </p>
            <p>
              If you are not sure if front-end web development is for you,
              and/or you want a gentle introduction before starting a longer and
              more complete course, work through our Getting started with the
              web module first.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default FrontendBlog;
