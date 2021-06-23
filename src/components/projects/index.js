import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div class="projects">
      <section class="project-box">
        <style>
          {"body { background-color: red; }"}
          <div>Hello</div>
        </style>
        <div class="project-title-area">
          <a href="assets/Final_Project_Valence.html"
            target="_blank"
          >
            Predicting the Valence of Pop Songs through Spotify's Audio Features
          </a>
        </div>
        <div class="project-info">
          <p>My final project for my data science class.</p>
          <p>Preview:</p>
          <a href="assets/Final_Project_Valence.html"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + '/assets/320proj.png'}
              alt=""
              width="100%"
              height="50%"
              className="content"
            />          </a>

        </div>
      </section>
      <section class="project-box">
        <div class="project-title-area">
          Quarantine Discord Bot
        </div>
        <div class="project-info">
          Discord Bot and Web Scraper combined!
          <ul>
            <li>
              Programmed a Discord bot using Python and discord.py API that
              executes miscellaneous commands and notifies users to enhance
              server activity.
            </li>
            <li>
              Web-scrapes worldwide coronavirus statistics through a series of
              user commands using tools from the BeautifulSoup4 library.
            </li>
            {/* <li>
              Generates bar graphs that display total confirmed and death cases
              from countries with the most coronavirus cases using Matplotlib
              library.
            </li> */}
          </ul>
          <img
            src={process.env.PUBLIC_URL + '/assets/quarantine_bot.png'}
            alt=""
            width="100%"
            height="50%"
            className="content"
          />
        </div>
      </section>
      {/* <section class="project-box">
        <div class="project-title-area">Alien Influx</div>
        <div class="project-info">This is project 3 testing</div>
      </section>
      <section class="project-box">
        <div class="project-title-area">CPS Test</div>
        <div class="project-info">Clicks Per Second Test</div>
      </section>
      <section class="project-box">
        <div class="project-title-area">CPS Test</div>
        <div class="project-info">Clicks Per Second Test</div>
      </section> */}
    </div>
  );
}
