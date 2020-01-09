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

const Game = () => {
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
                // console.log('Resonse from initial game load',res.data)
                setPlayerInfo(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return(
        <div className="game-container">
            <div className="game-map">
                <GameMap playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}/>        
            </div>
            <div className="side-panel">
                <RoomInfo player={playerInfo} setPlayer={setPlayerInfo}/>
                <Controls setPlayerInfo={setPlayerInfo} />
                <LogOut />
            </div>
        </div>
    )
}

export default Game;