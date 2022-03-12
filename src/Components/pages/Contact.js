import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
   const [name, processName] = useState("");
   const [mobileno, processMobileNo] = useState("");
   const [email, processEmail] = useState("");
   const [country, processCountry] = useState("");
   const [state, processState] = useState("");
   const [location, processLocation] = useState("");
   const [course, processCourse] = useState("");
   const [message, processMessage] = useState("");

   const saveData = () =>{
     var url = "https://course-data-api.herokuapp.com/api/v1/createform";
     var input = {name: name, mobileno: mobileno, email:email, country:country, state:state, location:location, course:course};
    axios.post(url, input).then(response =>{
      processMessage(response.data.message)
      processName("");
      processMobileNo("");
      processEmail("")
      processCountry("");
      processState("");
      processLocation("")
      processCourse("");
    })
   }

  return (
    <div className="section contact_section">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4 className=" form_title">GET IN TOUCH WITH US</h4>
            <p className='text-primary text-center'>{message}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="row">
              {/* <div className="col-md-4"></div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_label">FullName</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => processName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_label">Mobile No</label>
                  <input
                    type="text"
                    className="form-control"
                    value={mobileno}
                    onChange={(e) => processMobileNo(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              {/* <div className="col-md-4"></div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labeltwo">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => processEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labeltwo">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={(e) => processCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              {/* <div className="col-md-4"></div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labeltwo">State</label>
                  <input
                    type="text"
                    className="form-control"
                    value={state}
                    onChange={(e) => processState(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="form-group">
                  <label className="contact_form_labeltwo">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    value={location}
                    onChange={(e) => processLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row ">
              {/* <div className="col-md-4"></div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labelthree"></label>
                  <select
                    className="form-control mt-3"
                    style={{ fontSize: "14px" }}
                    value={course}
                    onChange={(e) => processCourse(e.target.value)}
                  >
                    <option>Choose Course</option>
                    <option>Digital Marketing</option>
                    <option>Front End Development</option>
                    <option>Backend End Development</option>
                    <option>JavaScript Course Training</option>
                    <option>ReactJS Course Training</option>
                    <option>MySQL DataBase Course Training</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <button
                  className="contact_form_submit_button"
                  onClick={saveData}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact