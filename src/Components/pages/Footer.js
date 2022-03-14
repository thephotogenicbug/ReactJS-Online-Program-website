import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <section>
            <h3>EDUPROV BOOTCAMP</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </section>
          <section>
            <h3>LINKS</h3>
            <a href="#">Home</a>
            <a href="#">About Us</a>
          </section>
          <section>
            <h3>OTHER</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </section>
          <section>
            <h3>ANY QUESTIONS?</h3>
            <a href="emailto:support@websitename.com">
              <span>
                <i className="fa fa-envelope"></i>
              </span>
              <span>admin@eduprov.com</span>
            </a>
            <a href="tel:+91 80 25591146">
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <span>+91 80 25591146</span>
            </a>
          </section>
        </div>
      </footer>
      <div className="sub-footer">
        Copyright ©2022 All rights reserved |{" "}
        <a className="sub-footer" href="https://eduprov.com/">
          Eduprov.com
        </a>
      </div>
    </div>
  );
}

export default Footer