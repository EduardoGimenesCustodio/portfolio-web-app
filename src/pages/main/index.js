import React from "react";

import "./styles.css";

import About from "../../components/About";
import Contacts from "../../components/Contacts";
import Technologies from "../../components/Technologies";

const Main = () => {
  return (
    <div className="main">
      <section className="main-section">
        <About />
        <Contacts />
      </section>

      <Technologies />
    </div>
  );
};

export default Main;
