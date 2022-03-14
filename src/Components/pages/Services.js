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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                  <Link to="/frontend">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </p>
                  <Link to="/backend">
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
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