import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Controls = props => {
  const move = (something) => {
    axiosWithAuth().post('https://funtimes-dreamteam.herokuapp.com/api/adv/move/', {direction: something})
    .then(res => {
        console.log('response from move',res.data)
        //set the playinfo state...//
        props.setPlayerInfo(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <div className="controls">
      <div className="left-button panel" >
        <span className="buttons" onClick={()=> move('w')}>W</span>
      </div>
      <div className="north-south-buttons panel">
        <span className="buttons"onClick={()=> move('s')}>N</span>
        <span className="buttons"onClick={()=> move('n')}>S</span>
      </div>
      <div className="right-button panel">
        <span className="buttons"onClick={()=> move('e')}>E</span>
      </div>
    </div>
  );
};

export default Controls;
