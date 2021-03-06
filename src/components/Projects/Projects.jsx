import "./Projects.css"
import React from "react"

export const Projects = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Small Personal Projects</h1>
      
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Tasks</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Project to manage pending tasks, project made in React.
          </h4>
          <a href="https://tasks-jsx.netlify.app/" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Rick And Morty</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Consumption of a Rick And Morty API that shows some cards through a search engine,
            project carried out in React
          </h4>
          <a href="https://api-rick-and-morty-search.netlify.app" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Anime Market</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Small market for anime figures made in JavaScript.
          </h4>
          <a href="https://anime-market.netlify.app" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Software Quality</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            Project on the Quality of Software carried out in HTML and CSS.
          </h4>
          <a href="https://software-quality.netlify.app/" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Firts Portfolio</h1>
          <h3 className="position">Description</h3>
          <h4 className="about">
            First personal portfolio made in React.
          </h4>
          <a href="https://juan-florez.netlify.app/" target='_blank' rel='noopener noreferrer' className="contact-member"><span>View</span></a>
        </div>
      </div>
    </div>
  )
}