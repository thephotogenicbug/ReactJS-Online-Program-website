import React from 'react'

const Contact = () => {
  return (
    <div className="section contact_section">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4"></div> */}
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4 className="contact_form_title">GET IN TOUCH WITH US</h4>
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
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_label">Mobile No</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row ">
              {/* <div className="col-md-4"></div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labeltwo">Email ID</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labeltwo">Country</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row ">
              {/* <div className="col-md-4"></div> */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="contact_form_labeltwo">State</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="form-group">
                  <label className="contact_form_labeltwo">Location</label>
                  <input type="text" className="form-control" />
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
                <button className="contact_form_submit_button">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact