import React, {useContext} from "react";
import "./Publications.scss";
import {publicationsSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  if (!publicationsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="publications-main-div">
          <div className="publications-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading publications-heading"
                  : "heading publications-heading"
              }
            >
              {publicationsSection.title}
            </h1>
            {publicationsSection.subtitle && (
              <p
                className={
                  isDark
                    ? "dark-mode subTitle publications-subtitle"
                    : "subTitle publications-subtitle"
                }
              >
                {publicationsSection.subtitle}
              </p>
            )}
          </div>
          <div className="publications-cards-div">
            {publicationsSection.publications.map((publication, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode publication-card"
                      : "publication-card"
                  }
                >
                  <div className="publication-detail-div">
                    <h5
                      className={
                        isDark ? "dark-mode publication-title" : "publication-title"
                      }
                    >
                      {publication.title}
                    </h5>
                    <p
                      className={
                        isDark
                          ? "dark-mode publication-authors"
                          : "publication-authors"
                      }
                    >
                      {publication.authors}
                    </p>
                    <p
                      className={
                        isDark
                          ? "dark-mode publication-journal"
                          : "publication-journal"
                      }
                    >
                      <em>{publication.journal}</em>
                    </p>
                    <span
                      className={
                        isDark
                          ? "dark-mode publication-status"
                          : "publication-status"
                      }
                    >
                      {publication.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

