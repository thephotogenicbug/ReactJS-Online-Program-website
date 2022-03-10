import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Components/Navbar";
import Main from "./Components/pages/Main";
import { Navbar } from "./Components/navbar/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
