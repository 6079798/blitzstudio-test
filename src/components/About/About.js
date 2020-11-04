import React from "react";

import "./about.scss";

import Container from "../Container";
import ScrollDown from "../ScrollDown/ScrollDown";
import image from "../../images/jason-wood.jpg";

const About = () => (
  <section id="about" className="about">
    <Container>
      <div className="about__inner">
        <div className="about__grid">
          <img className="about__image" src={image} alt="Jason Wood" />
          <div className="about__content">
            <h2 className="title">About Me</h2>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="about__text about__text--hidden">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="about__author">Jason Wood</p>
          </div>
        </div>
        <ScrollDown
          text="keep scrolling, there is still more to come."
          to="portfolio"
          className="scroll--grey about__scroll"
        />
      </div>
    </Container>
  </section>
);

export default About;
