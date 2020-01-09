import React, {useState, useEffect} from "react"

import LogOut from './nav';
import GameMap from './gamemap';
import RoomInfo from './roomInfo';
import Controls from './control';

import './game.scss'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Game = (props) => {
const [playerInfo, setPlayerInfo] = useState(null)

    useEffect(() => {
        axiosWithAuth().get("https://funtimes-dreamteam.herokuapp.com/api/adv/init/")
            .then(res => {
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
                <Controls playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
                <LogOut history={props.history}/>
            </div>
        </div>
    )
}

export default Game;