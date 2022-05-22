import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import './index.css'

function App() {
  return (
    <React.Fragment>
      <Home />
      <BackToTop />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
