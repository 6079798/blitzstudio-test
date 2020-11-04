import React from "react";
import clsx from "clsx";

import "./header.scss";
import Container from "../Container";
import Navbar from "../Navbar/Navbar";

const Header = ({ fixed }) => (
  <header className={clsx("header", fixed && "header--fixed")}>
    <Container>
      <Navbar />
    </Container>
  </header>
);

export default Header;
