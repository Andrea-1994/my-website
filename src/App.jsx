import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getRandomPastel } from "./utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Bio from "./pages/Bio";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";

function App() {
  const location = useLocation();

  //on change page
  useEffect(() => {
    //change palette
    getRandomPastel();

    //set page title
    var pageName = location.pathname;

    if (pageName == "/") {
      document.title = "Home | Khiron";
    } else {
      //remove "/" and capitalize
      var title = pageName
        .replace(/[\/-]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      document.title = title + " | Khiron";
    }
  }, [location.pathname]);

  return (
    <>
      <div id="main_container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
