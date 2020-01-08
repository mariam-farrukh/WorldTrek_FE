import React from 'react';

const RoomInfo = props => {
    const {title, description} = props.current

    return(
        <>
            <h2>Location: </h2>
            <h3>{title}</h3>
            <h3>{description}</h3>
        </>
    )

}

export default RoomInfo;