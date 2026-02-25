import React from "react";
import "./SoftwareSkill.scss";
import SkillFlipCard from "./SkillFlipCard.js";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  if (!skillsSection?.categories) return null;

  return (
    <div className="skills-grid">
      {skillsSection.categories.map((category, index) => (
        <SkillFlipCard key={index} category={category} />
      ))}
    </div>
  );
}