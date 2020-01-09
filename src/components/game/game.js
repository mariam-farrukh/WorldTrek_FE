import React, {useState, useEffect} from "react"

import LogOut from './nav';
import GameMap from './gamemap';
import RoomInfo from './roomInfo';
import Controls from './control';

import './game.scss'
import { axiosWithAuth } from "../utils/axiosWithAuth";

//adnan: finish this lol//
// const moveFuncN = (e) => {
//     e.preventDefault()
//     axios.post('https://lambda-mud-be.herokuapp.com/api/adv/move/', {direction: 'n'})
//     .then(res => {
//         console.log(res)
//     })

// }


// const playRoom = () => {
//     axiosWithAuth
// }

const Game = (props) => {
const [playerInfo, setPlayerInfo] = useState(null)

    // const moveFn = (something) => {
    //     axiosWithAuth().post('https://funtimes-dreamteam.herokuapp.com/api/adv/move/', {direction: something})
    //     .then(res => {
    //         console.log(res)
    //         //set the playinfo state...//
    //         setPlayerInfo(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    useEffect(() => {
        axiosWithAuth().get("https://funtimes-dreamteam.herokuapp.com/api/adv/init/")
            .then(res => {
                console.log('RoomID on first load: ',res.data)
                 setPlayerInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }, [])
    console.log('looking for history',props)
    
    return(
        <div className="game-container">
            <div className="game-map">
                <GameMap playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>        
            </div>
            <div className="side-panel">
                <RoomInfo player={playerInfo} setPlayer={setPlayerInfo}/>
                <Controls setPlayerInfo={setPlayerInfo} />
                <LogOut history={props.history}/>
            </div>
        </div>
    )
}

export default Game;