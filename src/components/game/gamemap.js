import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import {Stage, Layer, Rect, Shape} from 'react-konva'

const GameMap = props => {
    const [roomState, setRoomState] = useState();

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
    return(
    
        <div className="full-map">
            {props.playerInfo?
        <Stage width={500} height={500} >
            <Layer>
            <Shape
                sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(0, 10);
                    context.lineTo(50, 10);
                    context.closePath();
                    context.fillStrokeShape(shape);
                }}
                stroke="#282828"
                strokeWidth={10}
            />
            <Shape
                sceneFunc={(context, shape) => {
                    context.beginPath();
                    context.moveTo(50, 10);
                    context.lineTo(450, 10);
                    context.moveTo(460, 10);
                    context.lineTo(460, 50);
                    context.moveTo(0, 60);
                    context.lineTo(450, 60);
                    context.moveTo(10, 50);
                    context.lineTo(10, 100);
                    context.moveTo(0, 110);
                    context.lineTo(450, 110);
                    context.moveTo(460, 110);
                    context.lineTo(460, 170);
                    context.moveTo(0, 160);
                    context.lineTo(450, 160);
                    context.moveTo(10, 170);
                    context.lineTo(10, 220);
                    context.moveTo(0, 210);
                    context.lineTo(450, 210);
                    context.moveTo(460, 210);
                    context.lineTo(460, 260);
                    context.moveTo(0, 260);
                    context.lineTo(450, 260);
                    context.moveTo(10, 260);
                    context.lineTo(10, 310);
                    context.moveTo(0, 310);
                    context.lineTo(450, 310);
                    context.moveTo(460, 310);
                    context.lineTo(460, 360);
                    context.moveTo(0, 360);
                    context.lineTo(450, 360);
                    context.moveTo(10, 360);
                    context.lineTo(10, 410);
                    context.moveTo(0, 410);
                    context.lineTo(450, 410);
                    context.moveTo(460, 410);
                    context.lineTo(460, 460);
                    context.moveTo(0, 460);
                    context.lineTo(450, 460);
                    context.closePath();
                    context.fillStrokeShape(shape);
                }}
                stroke="#02414b"
                strokeWidth={10}
            />
                {
                roomState && roomState.map((room)=>{
                    if (room.id === props.playerInfo.roomID) {
                     return <Rect
                        x={room.x*50}
                        y={room.y*50}
                        width={20}
                        height={20} 
                        fill="#E09A30"
                        shadowColor="#E09A30"
                        shadowBlur={10}

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
        </Stage>: <p>loading</p>
         }
        </div>
    )

}


export default GameMap;