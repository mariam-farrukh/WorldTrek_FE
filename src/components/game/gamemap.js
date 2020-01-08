import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Konva from 'konva';
import {Stage, Layer, Rect, Path, Line} from 'react-konva'

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

    useEffect(() => {
         axios.get('https://funtimes-dreamteam.herokuapp.com/api/rooms/')
            .then(res => {
                console.log(res);
                const roomStuff = res.data;
                setRoomState(roomStuff);
            })
             .catch(err => {
                console.log(err)
            })
    },[])
    // const RoomPaths = () => {
    //     const
    // }
    let pointList = []
    const Points = () => {
        
        roomState && roomState.map(obj => {
            pointList.push(obj.x)
            pointList.push(obj.y)
            console.log(pointList)
        })
    }

    return(
        <div className="full-map">
        <Stage width={500} height={500} >
            <Layer>
                {roomState && roomState.map((room)=>{
                   return <Rect
                    x={room.x*50}
                    y={room.y*50}
                    width={20}
                    height={20}
                    fill="#c1f6ed"
                    shadowBlur={10}
                    />
                })}
                {/* {pointList.length && pointList.map(point => {
                    return(
                        
                    )
                })} */}
                {/* {pointList.length && <Line
                points={pointList}
                x={20}
                y={200} 
                stroke="yellow"
                />} */}
            </Layer>
        </Stage>
        </div>
    )

}


export default GameMap;