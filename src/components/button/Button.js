import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, download }) {
  return (
    <div className={className}>
      {href ? (
        <a
          className="main-button"
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : ""}
          download={download ? "Chadani_Acharya.pdf" : undefined}
        >
          {text}
        </a>
      ) : (
        <button className="main-button">{text}</button>
      )}
    </div>
  );
}
