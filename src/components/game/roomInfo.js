import React from 'react';

const RoomInfo = (props) => {
 
    return(
        <div className="room-info">
            {props.player 
            ? 
            <>
                <h2>{props.player.title}</h2>
                <p>{props.player.description}</p> 
                <p>Current Players:{props.player.players.map(person => <p>{person}</p>)}</p>
                <p>{props.player.error_msg}</p>
            </> 
            : <></> }
              
        </div>
    )

}

export default RoomInfo;