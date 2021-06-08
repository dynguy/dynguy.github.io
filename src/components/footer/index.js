import React from "react";
// import { Link } from 'react-router-dom';
import "./main.css";

export default function Footer() {
  return (
    <footer>
      <div id="social_media">
        <a
          href="https://github.com/dynguy"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="fab fa-github"></i>{"  "}GitHub
        </a>
        
        <a
          href="https://www.linkedin.com/in/dynguy/"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="fab fa-linkedin"></i>{"  "} Linkedin
        </a>
       
        <a
          href="assets/Resume2021.pdf"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="far fa-copy"></i>{" "}Resume
        </a>
        
        <a
          href="https://github.com/dynguy?tab=repositories"
          target="_blank"
          rel="noreferrer"
          class="btn contact-details"
        >
          <i class="far fa-folder"></i>{" "}Projects
        </a>
        
      </div>
    </footer>
  );
}
