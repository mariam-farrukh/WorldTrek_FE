import React from 'react';

const RoomInfo = (props) => {
    console.log(props)
 
    return(
        <div className="room-info">
            {props.player ? <><h2>{props.player.title}</h2>
            <p>{props.player.description}</p> <p>current players:{props.player.players.map(person => <p>{person}</p>)}</p></> : <>loading</> }
           
             
        </div>
    )

}

export default RoomInfo;