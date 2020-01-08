import React, {useState, useEffect} from "react"
import axios from "axios"

import LogOut from './nav';
import GameMap from './gamemap';
import RoomInfo from './roomInfo';
import Controls from './control';

import './game.scss'


const moveFuncN = (e) => {
    e.preventDefault()
    axios.post('https://lambda-mud-be.herokuapp.com/api/adv/move/', {direction: 'n'})
    .then(res => {
        console.log(res)
    })

}

const Game = prop => {

    return (
        
        <div className="game-container">
            <div className="game-map">
                <GameMap />
            </div>
            <div className="side-panel">
                <RoomInfo />
                <Controls />
                 <LogOut />
            </div>
        </div>
    )
}

export default Game;