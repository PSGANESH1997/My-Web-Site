import React from "react";
import Typical from "react-typical";
import './Profile.css';
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/selvaganesh-p-885751229/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.facebook.com/selva.ganesh.376258/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="https://www.instagram.com/sriganesh787/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@k.s.c.krishnapuramsportsclub">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Selvaganesh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev😠",
                    1000,
                    "Full Stack Developer💻",
                    1000,
                    "MERN Stack Developer 👨‍💻",
                    1000,
                    "Cross Platform v 🌎",
                    1000,
                    "React Dev 🖥️📱💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="/public/React My Resume.pdf"
              download="Selvaganesh React My resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <di className="profile-picture">
          <div className="profile-picture-background"></div>
        </di>
      </div>
    </div>
  );
}
