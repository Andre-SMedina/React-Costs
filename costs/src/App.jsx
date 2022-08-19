import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";

import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

import Container from "./components/layouts/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects/:msg" element={<Projects />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
