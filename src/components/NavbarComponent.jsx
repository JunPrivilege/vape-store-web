import React, { useState, useEffect } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { navLinks } from "../data/index.js";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  }, []);

  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 100);
  };

  return (
    <div>
      <Navbar
        expanded={expanded}
        expand="lg"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            JUNSTORE
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      onClick={closeNavbar}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : "" } end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center mb-3 mt-3">
              <button className="btn btn-outline-dark rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
