import React from "react";

import "./hero.scss";
import Container from "../Container";
import ScrollDown from "../ScrollDown/ScrollDown";

const Hero = ({ element }) => (
  <section id="home" className="hero">
    <Container>
      <div ref={element} className="hero__inner">
        <ScrollDown
          text="scroll down to see more"
          to="about"
          className="hero__scroll"
        />
      </div>
    </Container>
  </section>
);

export default Hero;
