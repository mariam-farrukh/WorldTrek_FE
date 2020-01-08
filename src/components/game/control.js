import React from "react";

const Controls = props => {
  return (
    <div className="controls">
      <div className="left-button panel">
        <span className="buttons">W</span>
      </div>
      <div className="north-south-buttons panel">
        <span className="buttons">N</span>
        <span className="buttons">S</span>
      </div>
      <div className="right-button panel">
        <span className="buttons">E</span>
      </div>
    </div>
  );
};

export default Controls;
