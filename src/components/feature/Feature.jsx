import React from "react";
import "./features.css";
export const Feature = ({title, text,marginRight}) => {
  return (
    <div className="gpt3__features-container__feature" >
      <div className="gpt3__features-container__feature-title"  style={{marginRight: marginRight}}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text"  style={{marginRight: marginRight}}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
