import React from "react";
import "./SkillFlipCard.scss";

export default function SkillFlipCard({ category }) {
  return (
    <div className="skill-card">
      <div className="skill-card-inner">

        {/* FRONT */}
        <div className="skill-card-front">
          <div className="card-image">
            <img
              src={category.image}
              alt={category.title}
            />
          </div>

          <div className="card-title">
            {category.title}
          </div>
        </div>

        {/* BACK */}
        <div className="skill-card-back">
          {category.groups.map((group, idx) => (
            <div className="skill-group" key={idx}>
              <strong>{group.label}</strong>
              <ul>
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}