import React from "react";

const Controls = props => {
  return (
    <div className="controls">
      <div className="left-button panel" >
        <span className="buttons" onClick={()=> props.move('w')}>W</span>
      </div>
      <div className="north-south-buttons panel">
        <span className="buttons"onClick={()=> props.move('n')}>N</span>
        <span className="buttons"onClick={()=> props.move('s')}>S</span>
      </div>
      <div className="right-button panel">
        <span className="buttons"onClick={()=> props.move('e')}>E</span>
      </div>
    </div>
  );
};

export default Controls;
