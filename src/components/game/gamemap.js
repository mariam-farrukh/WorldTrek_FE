import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import {Stage, Layer, Rect} from 'react-konva'

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
    const { playerInfo , setPlayerInfo} = props;
    const [roomState, setRoomState] = useState();
    // const [userState, setUserState] = useState({currentroom})

    useEffect(() => {
         axiosWithAuth().get('https://funtimes-dreamteam.herokuapp.com/api/rooms/')
            .then(res => {
                // console.log(res);
                setRoomState(res.data);
            })
             .catch(err => {
                console.log(err)
            })
    },[])

    // useEffect(()=>{
    //     if(playerInfo){
    //     }
    // },[playerInfo])
    // const RoomPaths = () => {
    //     const
    // }
    // const Ponits = () => {
        // let pointList = []
        
        // roomState && roomState.map(obj => {
        //     pointList.push(obj.x)
        //     pointList.push(obj.y)
        //     console.log(pointList)
        // })
    // }


    return(
        <div className="full-map">
        <Stage width={500} height={500} >
            <Layer>
                {roomState && roomState.map((room)=>{
                    if (room.id === props.playerInfo.roomID) {
                        // console.log(props.playerInfo)
                     return <Rect
                        // points={pointList}
                        x={room.x*50}
                        y={room.y*50}
                        width={20}
                        height={20} 
                        fill="blue"
                    /> 
                    }
                   return <Rect
                    x={room.x*50}
                    y={room.y*50}
                    width={20}
                    height={20}
                    fill="#c1f6ed"
                    shadowBlur={10}
                    />
                })}
 
            </Layer>
        </Stage>
        </div>
    )

}


export default GameMap;