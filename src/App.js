import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Main from "./Components/pages/Main";
import { Navbar } from "./Components/navbar/index";
import FrontendBlog from "./Components/pages/Frontend_Blog";
import BackendBlog from "./Components/pages/Backend_Blog";
import ContactForm from "./Components/pages/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/frontend" element={<FrontendBlog />} />
        <Route exact path="/backend" element={<BackendBlog />} />
        <Route exact path="/applicationform" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
