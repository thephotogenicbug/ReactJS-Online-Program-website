import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { Helmet } from "react-helmet";
import './Main.css'
const ContactForm = () => {
  const [name, processName] = useState("");
  const [mobile, processMobile] = useState("");
  const [email, processEmail] = useState("");
  const [country, processCountry] = useState("");
  const [state, processState] = useState("");
  const [city, processCity] = useState("");
  const [altmobile, processAltMobile] = useState("");
  const [qualification, processQualification] = useState("");
  const [program, processProgram] = useState("");
  const [message, processMessage] = useState("");

  const SubmitData = () => {
    var url = "https://course-data-api.herokuapp.com/api/v1/applicationform";
    var input = {
      name: name,
      mobile: mobile,
      email: email,
      country: country,
      state: state,
      city: city,
      altmobile: altmobile,
      qualification: qualification,
      program: program,
    };
    axios.post(url, input).then((response) => {
      processMessage(response.data.message);
      processName("");
      processMobile("");
      processEmail("");
      processCountry("");
      processState("");
      processCity("");
      processAltMobile("");
      processQualification("");
      processProgram("");
    });

    if (name.length <= 0) {
      processMessage("Please Enter Your Name");
    } else if (mobile.length <= 0) {
      processMessage("Please Enter Your Mobile No");
    } else if (email.length <= 0) {
      processMessage("Please Enter Your Email ID");
    } else if (country.length <= 0) {
      processMessage("Please Enter Your Country Details");
    } else if (state.length <= 0) {
      processMessage("Please Enter Your State Details");
    } else if (city.length <= 0) {
      processMessage("Please Enter Your City Details");
    } else if (altmobile.length <= 0) {
      processMessage("Please Enter Your Alternative Mobile No ");
    } else if (qualification.length <= 0) {
      processMessage("Please Enter Your Qualification Details ");
    } else if (program.length <= 0) {
      processMessage("Please Choose Your Program ");
    } else return;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Application Form</title>
        <link rel="canonical" href="https://onlineskills-eduprov.vercel.app/" />
        <meta
          name="description"
          content="Digital Marketing and Web Development Training In Bangalore"
        />
        <meta
          name="keyword"
          content="
          digital marketing courses in bangalore,web designing in bangalore,web development training in bangalore,digital marketing training in bangalore,web development course in bangalore,digital marketing institute in bangalore,digital marketing training institute in bangalore,best digital marketing training institute in bangalore,best digital marketing course in bangalore,full stack developer course in bangalore,best digital marketing institute in bangalore,digital marketing course fees in bangalore,top digital marketing courses in bangalore,digital marketing courses in bangalore with placement,top digital marketing training institute in bangalore,ui development training in bangalore,web designing course bangalore,full stack developer course with placement in bangalore,digital marketing courses in bangalore marathahalli,java full stack developer course in bangalore,digital marketing colleges in bangalore,online digital marketing courses in bangalore,full stack development course in bangalore,digital marketing classes in bangalore,web designing training in bangalore,marketing courses in bangalore,full stack course in bangalore,full stack web development course in bangalore,best digital marketing training in bangalore,top 10 digital marketing institutes in bangalore,best institute for full stack developer in bangalore,web developer course in bangalore,digital academy 360 bangalore,best digital marketing courses in bangalore with placement,full stack developer course in bangalore with placement,email marketing training in bangalore,top digital marketing institute in bangalore,full stack developer course bangalore,digital marketing training course in bangalore,full stack developer training institutes in bangalore,web development institute in bangalore,national institute of digital marketing bangalore,web development course in bangalore with placement,mean stack training with placement guarantee bangalore,social media marketing courses in bangalore,best web development institute in bangalore,mean stack training in bangalore,best digital marketing courses bangalore,full stack development training in bangalore,
          digital marketing training institute bangalore,best full stack developer course institute in bangalore,digital marketing academy bangalore,best institute for web development in bangalore,web development course in bangalore fees,web development training institute in bangalore,digital marketing coaching in bangalore,digital marketing online courses in bangalore,full stack web developer course in bangalore,web designing course with placement in bangalore,top digital marketing courses bangalore,digital marketing academy in bangalore,digital marketing fees in bangalore,digital marketing offline course in bangalore,best web development courses in bangalore,digital marketing course institute in bangalore,web development course fees in bangalore,learn digital marketing in bangalore,digital marketing course price in bangalore,digital marketing courses in rajajinagar bangalore,front end developer training in bangalore,best web development training institute in bangalore,web development coaching in bangalore,advanced digital marketing course in bangalore,best institute for digital marketing course in bangalore,masters in digital marketing bangalore,website development course in bangalore,full stack web development training in bangalore,top 10 digital marketing courses in bangalore,digital marketing courses online bangalore,digital marketing courses in btm layout bangalore,digital marketing courses in bangalore with 100 placement,web development courses in bangalore vijayanagar,front end development training in bangalore,diploma in digital marketing in bangalore,best full stack development training in bangalore,mean stack developer training in bangalore,digital marketing courses in vijayanagar bangalore,web designing and development course in bangalore,mean stack course in bangalore,digital marketing courses in electronic city bangalore,digital marketing certification courses in bangalore,best training institute for web development in bangalore
        "
        />
      </Helmet>
      <div className="backend_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="backend_title">Application Form </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <p className="text-success">{message}</p>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FullName"
                    value={name}
                    onChange={(e) => processName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MobileNo"
                    value={mobile}
                    onChange={(e) => processMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email ID"
                    value={email}
                    onChange={(e) => processEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => processCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                    value={state}
                    onChange={(e) => processState(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    value={city}
                    onChange={(e) => processCity(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alternative MobileNo"
                    value={altmobile}
                    onChange={(e) => processAltMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Qualification"
                    value={qualification}
                    onChange={(e) => processQualification(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <select
                    className="form-control"
                    value={program}
                    onChange={(e) => processProgram(e.target.value)}
                  >
                    <option>Choose Program</option>
                    <option>FrontEnd Program</option>
                    <option>Backend Program</option>
                    <option>Digital Marketing Program</option>
                    <option>JavaScript Program</option>
                    <option>ReactJS Program</option>
                    <option>MYSQL DB Program</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <button className="contact_form_button" onClick={SubmitData}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4"></div>
      <Footer />
    </>
  );
};

export default ContactForm;
