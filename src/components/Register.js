import React, {useState} from "react";
import axios from "axios";
import {withRouter} from "react-router";
import {Link} from 'react-router-dom';
import {Form, Button} from "semantic-ui-react";

import './Forms.scss';

const RegisterForm = props => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    const handleSubmit = event => {
        event.preventDefault();
        axios.post("https://funtimes-dreamteam.herokuapp.com/registration", user)
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
                    label="Email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={event => handleChange(event)}
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Input
                    label="Password"
                    name="password"
                    type="password"
                    value={user.password1}
                    onChange={event => handleChange(event)}
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Input
                    label="Confirm Password"
                    name="password"
                    type="password"
                    value={user.password2}
                    onChange={event => handleChange(event)}
                    
                />
            </Form.Group>
            <Button
                type="submit"
                postive
                labelPosition="right"
                content="Sign Up"
            />
            <Link to="/login">already have an account?</Link>
        </Form>
    )
}

export default withRouter(RegisterForm);