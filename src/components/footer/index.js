import React from "react";
// import { Link } from 'react-router-dom';
import "./main.css";
// import { NavLink } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Footer() {
  return (
    <footer>
      <div id="social_media">
        {/* <a
          href="https://github.com/dynguy"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="fab fa-github"></i>
          {"  "}GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dynguy/"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="fab fa-linkedin"></i>
          {"  "} Linkedin
        </a>

        <a
          href="assets/Resume2021.pdf"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="far fa-address-card"></i> Resume
        </a>
        <a
          href="projects/index.js"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="far fa-folder-open"></i> Projects
        </a> */}
        <Nav navbar>
          <NavItem>
            <NavLink href="#/">
              <a href="#/" rel="noreferrer" class="btn contact-details">
                <i class="fas fa-home"></i>
                {"  "}Home
              </a>
            </NavLink>
          </NavItem>
          <NavItem>
            <a
              href="https://github.com/dynguy"
              target="_blank"
              rel="noreferrer"
              class="btn contact-details"
            >
              <i class="fab fa-github"></i>
              {"  "}GitHub
            </a>
          </NavItem>
          <NavItem>
            <a
              href="https://www.linkedin.com/in/dynguy/"
              target="_blank"
              rel="noreferrer"
              class="btn contact-details"
            >
              <i class="fab fa-linkedin"></i>
              {"  "} Linkedin
            </a>
          </NavItem>
          <NavItem>
            <a
              href="assets/Resume2021.pdf"
              target="_blank"
              rel="noreferrer"
              class="btn contact-details"
            >
              <i class="far fa-address-card"></i> Resume
            </a>
          </NavItem>

          <NavItem>
            <NavLink href="#/projects/">
              <a href="#/projects/" rel="noreferrer" class="btn contact-details">
                <i class="far fa-folder-open"></i> Projects
              </a>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </footer>
  );
}
