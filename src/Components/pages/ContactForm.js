import React, { useState } from 'react'
import Footer from './Footer';

const ContactForm = () => {
    const [name, processName] = useState("")
    const [mobile, processMobile] = useState("");
    const [email, processEmail] = useState("");
    const [country, processCountry] = useState("");
    const [state, processState] = useState("");
    const [city, processCity] = useState("");
    const [altmobile, processAltMobile] = useState("");
    const [qualification, processQualification] = useState("");
    const [program, processProgram] = useState("");
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
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FullName"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="MobileNo"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email ID"
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
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
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
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Qualification"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group m-3">
                  <select className="form-control">
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
                <button className='contact_form_button'>SUBMIT</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4"></div>
      <Footer />
    </>
  );
}

export default ContactForm