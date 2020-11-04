import React, { useState } from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

import "./navbar.scss";

const navItems = [
  { title: "Home", to: "home" },
  { title: "About Me", to: "about" },
  { title: "Portfolio", to: "portfolio" },
  { title: "Contact", to: "contacts" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(prevState => !prevState)}
        className="nav-toggle"
        type="button"
      >
        {open ? "X" : "∞ MENU"}
      </button>
      <nav className={clsx("nav", open && "nav--show")}>
        <ul className="nav__links">
          {navItems.map((item, idx) => {
            const { title, to } = item;
            return (
              <li key={idx}>
                <Link
                  className="nav__link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(false)}
                  activeClass="nav__link--active"
                  to={to}
                  spy
                  smooth
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
