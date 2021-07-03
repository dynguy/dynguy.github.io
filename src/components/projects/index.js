import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <section className="project-box">
        {/* <style>
          {"body { background-color: red; }"}
          <div>Hello</div>
        </style> */}
        <div className="project-title-area">
          <a href="assets/Final_Project_Valence.html" target="_blank">
            Predicting the Valence of Pop Songs through Spotify's Audio Features
          </a>
        </div>
        <div className="project-info">
          <div className="tags_container">
            <span className="relevant_tags">Python</span>
            <span className="relevant_tags">Data Science</span>
            <span className="relevant_tags">Machine Learning</span>
            <span className="relevant_tags">Pandas</span>
            <span className="relevant_tags">NumPy</span>
            <span className="relevant_tags">Seaborn / Matplotlib</span>
          </div>
          <p>My final project for my data science class!</p>
          <ul>
            <li>
              Created a tutorial that walks readers through the Data Science
              Pipeline
            </li>
            <li>
              Data collection/curation, data management/representation,
              exploratory data analyis, hypothesis testing and machine learning,
              conclusions
            </li>
            <li>
              Linear Regression was used to see if there was any relationship between a
              pop song's valence and other audio features.
            </li>
          </ul>
          {/* <p>Preview:</p> */}
          <a href="assets/Final_Project_Valence.html" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/assets/320proj.png"}
              alt=""
              width="25%"
              height="25%"
              className="content"
            />{" "}
          </a>
        </div>
      </section>
      <section className="project-box">
        <div className="project-title-area">Quarantine Discord Bot</div>
        <div className="project-info">
          <div className="tags_container">
            <span className="relevant_tags">Python</span>
            <span className="relevant_tags">Discord.Py</span>
            <span className="relevant_tags">BeautifulSoup4</span>
            <span className="relevant_tags">Pandas</span>
          </div>
          <p>Discord Bot and Web Scraper combined!</p>
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
            src={process.env.PUBLIC_URL + "/assets/quarantine_bot.png"}
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
