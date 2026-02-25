import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <h1 className="education-heading">Skills & Capabilities</h1>

      <div className="skills-main-div">
        
        {/* Left Column */}
        <Fade left duration={1000}>
          <div className="skills-left">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}
            </h1>
            <SoftwareSkill />
          </div>
        </Fade>

        {/* Right Column */}
        {/* <Fade right duration={1000}>
          <div className="skills-right">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </div>
        </Fade> */}

      </div>
    </div>
  );
}