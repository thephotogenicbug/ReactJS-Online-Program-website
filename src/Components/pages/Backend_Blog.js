import React from 'react'
import Footer from './Footer';

const BackendBlog = () => {
  return (
    <>
      <div className="backend_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='backend_title'>BackEnd Development</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h2>What is Backend Development?</h2>
            <p style={{ textAlign: "justify" }}>
              <b> Backend Development</b> is also known as server-side
              development. It is everything that the users don’t see and
              contains behind-the-scenes activities that occur when performing
              any action on a website. It focuses primarily on databases,
              backend logic, APIs, and Servers.
            </p>
            <p style={{ textAlign: "justify" }}>
              The backend of a website is a combination of servers,
              applications, and databases. Code written by backend developers
              helps browsers in communicating with the databases and store data
              into the database, read data from the database, update the data
              and delete the data or information from the database.
            </p>
            <p style={{ textAlign: "justify" }}>
              When you click the submit button after filling in your details,
              they are sent to the server that then processes your data and
              stores it in the database. Now we have the details shared by you
              in our database. But did you see any of this happening? No,
              because it happened behind the scenes. Thus, it is known as the
              backend. It is just an overview of what the backend is, but this
              is not it, there is a lot to it.
            </p>
            <label className="fw-bold">Backend Developer Skills</label>
            <p style={{ textAlign: "justify" }}>
              To become a backend developer, you should have good knowledge
              about these topics:
            </p>
            <ol>
              <li>Backend Programming Languages</li>
              <li>Databases</li>
              <li>Server</li>
              <li>APIs</li>
            </ol>
            <label className="fw-bold">Knowledge of APIs</label>
            <p style={{ textAlign: "justify" }}>
              The entire internet works via the medium of APIs. API stands for
              Application Programming Interface and API is a medium through
              which two computer software can talk to each other.
            </p>
            <p style={{ textAlign: "justify" }}>
              API is a set of rules and definitions that allow different
              clients, software, or services to communicate with each other over
              the internet. When two systems communicate, the server is the one
              that provides the API, and the client is the one who consumes it.
            </p>
            <p style={{ textAlign: "justify" }}>
              APIs take a request from the client or user and send it to the
              server, which then sends back a response based on the request.
            </p>
            <p>This communication is done through HTTP methods such as:</p>
            <ol>
              <li>GET: used to retrieve a resource.</li>
              <li>DELETE: used to delete a resource.</li>
              <li>PUT: used to replace an existing resource.</li>
              <li>POST: used to create a new resource.</li>
            </ol>
            <p style={{ textAlign: "justify" }}>
              <b>Backend developers</b> should have extensive knowledge about
              APIs since they are medium which enables data transfer. APIs
              generally act as a mediator between the backend and the databases
              enabling the developers to fetch the user data. Backend developers
              create APIs using various languages and frameworks including
              Python, NodeJS, etc. These APIs then can be consumed by frontend
              developers to collect the data, and show it on the frontend side
              of the website, and enhance the User Experience.
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

export default BackendBlog