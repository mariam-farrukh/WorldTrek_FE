import React, {useState} from "react";
import axios from "axios";
import { withRouter } from "react-router"
import {Link} from 'react-router-dom';
import { Form } from "semantic-ui-react"

import './Forms.scss';

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("https://funtimes-dreamteam.herokuapp.com/api-token-auth/", user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push("/game") //this should be the link to the game
            })
            .catch(err => console.log("Error with posting login", err));
    };

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    return(
        <div className="container">
        <div className="userForm">
            <h1>Login</h1>
            {/* <div > */}
                <Form className="enterform" onSubmit={event => handleSubmit(event)}>
                    <Form.Group>
                        <Form.Input
                            label="Username"
                            name="username"
                            type="text"
                            value={user.username}
                            onChange={event => handleChange(event)}

                        />
                        <Form.Input
                            label="Password"
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={event => handleChange(event)}
                            
                        />
                        <button>Login</button>
                    </Form.Group>
                    <p>Don't have an account? <Link  to="/register">Sign Up</Link></p>
                </Form>
                </div>
            </div>
        // </div>
    )
}

export default withRouter(Login)