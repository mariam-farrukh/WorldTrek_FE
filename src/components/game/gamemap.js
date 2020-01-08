import React, {useState, useEffect} from 'react';
import Box from 'ui-box'

const Room = ({room}) => {
    return (<Box width={80} height={80} border="1px solid black" background={room.background}>
        {room.name}
    </Box>)
}

// const RoomRow = ({row}) => {
//     return (<Box display={"flex"} flexDirection="row">
//         {row.map((room) => {
//             <Room room={room}/>
//         })}
//     </Box>)
// }

// const User = ({userState}) => {
//     return (
//         <Box
//         position="absolute"
//         left={userState.x*80}
//         top={userState.y*80}
//         background = "blue"
//         height={20}
//         width={20}
//         />
//     )
// }

const GameMap = props => {
    const [roomState, setRoomState] = useState();
    // const [userState, setUserState] = useState({currentroom})

    // useEffect(() => {
        //  
    // })

    return(
        <div className="map">
            {/* <Box>
                <Box padding={20} position={"relative"}>
                    {roomState.map((roomRow) => {
                        <RoomRow row={roomRow}/>
                    })}
            
            </Box> */}
            map

        </div>
    )

}


export default GameMap;