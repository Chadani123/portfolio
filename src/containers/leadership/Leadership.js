import React, {useContext} from "react";
import "./Leadership.scss";
import {leadershipSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Leadership() {
  const {isDark} = useContext(StyleContext);

  if (!leadershipSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="leadership">
        <div className="leadership-main-div">
          <div className="leadership-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading leadership-heading"
                  : "heading leadership-heading"
              }
            >
              {leadershipSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle leadership-subtitle"
                  : "subTitle leadership-subtitle"
              }
            >
              {leadershipSection.subtitle}
            </p>
          </div>

          <div className="leadership-cards-div">
            {leadershipSection.experiences.map((entry, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode leadership-card leadership-card-dark"
                      : "leadership-card leadership-card-light"
                  }
                >
                  <h3 className={isDark ? "dark-mode leadership-org" : "leadership-org"}>
                    {entry.organization}
                  </h3>
                  <p className={isDark ? "dark-mode leadership-meta" : "leadership-meta"}>
                    {entry.year}
                  </p>
                  <h4
                    className={
                      isDark ? "dark-mode leadership-role" : "leadership-role"
                    }
                  >
                    {entry.role}
                  </h4>
                  <p
                    className={
                      isDark
                        ? "dark-mode leadership-description"
                        : "leadership-description"
                    }
                  >
                    {entry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
