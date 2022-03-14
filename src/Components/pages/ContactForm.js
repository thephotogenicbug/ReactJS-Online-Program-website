import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
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
