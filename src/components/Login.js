import React, {useState} from "react";
import axios from "axios";
import { withRouter } from "react-router"
import {Link} from 'react-router-dom';
import { Form, Button } from "semantic-ui-react"

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
                console.log(res)
                localStorage.setItem('key', res.data.key)
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
            <div className="enterform">
                <Form onSubmit={event => handleSubmit(event)}>
                    <Form.Group>
                        <Form.Input
                            label="Username"
                            name="username"
                            type="text"
                            value={user.username}
                            onChange={event => handleChange(event)}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label="Password"
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={event => handleChange(event)}
                            
                        />
                    </Form.Group>
                    <Button
                        type="submit"
                        postive
                        icon="checkmark"
                        // labelPosition="right"
                        content="Login"
                    />
                    <Link to="/register">don't have an account?</Link>
                </Form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)