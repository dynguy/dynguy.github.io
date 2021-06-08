import React from "react";
// import { Link } from 'react-router-dom';
import "./main.css";

export default function Main() {
  return (
    <section id="box">
      <div class="top-info-box">
        About Me
        <div class="intro">
          <p>
            {" "}
            Hello! My name is Dylan Nguyen and I am a computer science student
            at the University of Maryland, College Park.
          </p>
          <p>
            {" "}
            I graduated from Montgomery College in 2020 with an AA in Computer
            Science.
          </p>
          <p>
            {" "}
            Previously, I was a computer forensics research intern under NIST's{" "}
            <a
              href="https://www.nist.gov/itl/ssd/software-quality-group/computer-forensics-tool-testing-program-cftt"
              target="_blank"
              rel="noreferrer"
            >
              CFTT
            </a>{" "}
            team. Here, I was able to dive into the world of mobile device
            forensics and research using various data extraction digital tools
            (XRY Kiosk, Autopsy).
          </p>
          <p>
            {" "}
            You can check out my resume and projects below! You can also email
            me at dynguye@umd.edu.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
