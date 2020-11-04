import React from "react";
import clsx from "clsx";
import { Link } from "react-scroll";

import "./scrollDown.scss";

const ScrollDown = ({ text, to, className }) => (
  <div className={clsx("scroll", className)}>
    <p className="scroll__text">{text}</p>
    <Link
      className="scroll__link"
      style={{ cursor: "pointer" }}
      to={to}
      spy
      smooth
    />
  </div>
);

export default ScrollDown;
