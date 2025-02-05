import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community"
import Volunteer from "./pages/Volunteer";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Community />} path="/community" />
          <Route element={<Volunteer />} path="/volunteer" /> 
          <Route element={<Donation />} path="/donation" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Router>
    </>
  );
}

export default App
