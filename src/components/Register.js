import React, {useState} from "react";
import axios from "axios";
import {withRouter} from "react-router";
import {Link} from 'react-router-dom';
import {Form} from "semantic-ui-react";

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
        axios.post("https://funtimes-dreamteam.herokuapp.com/api/registration/", user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push("/") //this should be the link to the game
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
                <h1>Sign Up</h1>
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
                                label="Email"
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={event => handleChange(event)}
                                
                            />
                            <Form.Input
                                label="Password"
                                name="password1"
                                type="password"
                                value={user.password1}
                                onChange={event => handleChange(event)}
                                
                            />
                            <Form.Input
                                label="Confirm Password"
                                name="password2"
                                type="password"
                                value={user.password2}
                                onChange={event => handleChange(event)}
                                
                            />
                            <button>Sign Up</button>
                        </Form.Group>
                        <p>Already have an account? <Link  to="/">Login</Link></p>
                        
                    </Form>
            </div>
        </div>
    )
}

export default withRouter(RegisterForm);