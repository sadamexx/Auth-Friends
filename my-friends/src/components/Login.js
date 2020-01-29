import React from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/FriendsList');
        })
        .catch(err => console.log('login error', err));
    }




    render(){
        return(
            <Form onSubmit={this.login}>
            <FormGroup>
                <Label for="exampleEmail">User Name</Label>
                <Input 
                type="username" 
                name="username" 
                value={this.state.credentials.username} 
                onChange={this.handleChange}
                placeholder="User Name" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                type="password" 
                name="password" 
                value={this.state.credentials.password} 
                onChange={this.handleChange}
                placeholder="password" />
                </FormGroup>
                <Button>Log In</Button>
            </Form>
        );
    }    
}

export default Login;
