import React from 'react';

const LogOut = (props) => {
    return (
        <div onClick={() =>{localStorage.removeItem('token')
            props.history.push('/')}} className="LogOut">
            <span  className="button">Log out</span>
        </div>
    )
}

export default LogOut;