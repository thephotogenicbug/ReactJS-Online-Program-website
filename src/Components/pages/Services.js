import React from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="section services_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section_title">ONLINE PROGRAMS</h2>
          </div>
        </div>
        <div className="mobile_scroll">
          <div className="row mt-5 py-3">
            <div className="col-md-4">
              <div className="card card_wrapper">
                <div className="card-body">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-meteor icons"></i>
                  </div>
                  <h3 className="card_title">Digital Marketing</h3>
                  <p className="card_subtitle">
                    Digital marketing, also called online marketing, is the
                    promotion of brands to connect with potential customers
                    using the internet
                  </p>
                  <Link to="/">
                    <button className="card_button">LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card card_wrapper">
                <div className="card-body">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-meteor icons"></i>
                  </div>
                  <h3 className="card_title">Front End Development</h3>
                  <p className="card_subtitle">
                    Front-end web development, also known as client-side
                    development is the practice of producing HTML, CSS and
                    JavaScript
                  </p>
                  <Link to="/frontend.html">
                    <button className="card_button">LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card_wrapper">
                <div className="card-body">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-meteor icons"></i>
                  </div>
                  <h3 className="card_title">Back End Development</h3>
                  <p className="card_subtitle">
                    Backend Development is also known as server-side
                    development.It is everything that the users don’t see and
                    contains behind-the-scenes
                  </p>
                  <Link to="/backend.html">
                    <button className="card_button">LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 py-3  ">
            <div className="col-md-4">
              <div className="card card_wrapper">
                <div className="card-body">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-meteor icons"></i>
                  </div>
                  <h3 className="card_title">JavaScript Course Training</h3>
                  <p className="card_subtitle">
                    JavaScript is a scripting language that enables you to
                    create dynamically updating content
                  </p>
                  <Link to="/">
                    <button className="card_button">LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card_wrapper">
                <div className="card-body">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-meteor icons"></i>
                  </div>
                  <h3 className="card_title">ReactJS Course Training</h3>
                  <p className="card_subtitle">
                    React. js is an open-source JavaScript library that is used
                    for building user interfaces specifically
                  </p>
                  <Link to="/">
                    <button className="card_button">LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card card_wrapper">
                <div className="card-body">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-meteor icons"></i>
                  </div>
                  <h3 className="card_title">MYSQL DB Training</h3>
                  <p className="card_subtitle">
                    MySQL is the world's most popular open source database. With
                    its proven performance
                  </p>
                  <Link to="/">
                    <button className="card_button">LEARN MORE</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services