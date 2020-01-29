import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddFriend = () => {
    const [newFriend, setNewFriend] = useState({
        newFriend: {
            id: Date.now(),
            name: "",
            age: "",
            email: "",
        }
    });


    const handleChange = e => {
        setNewFriend({            
                ...newFriend,
                [e.target.name] : e.target.value            
        })
    }

    const addFriend = () => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            setNewFriend({
                newFriend: res.data
            })
        })
    }

    return(
        <Form onSubmit={addFriend}>
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input 
                type="name" 
                name="name" 
                value={newFriend.name} 
                onChange={handleChange}
                placeholder="Name" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input 
                type="text" 
                name="age" 
                value={newFriend.age} 
                onChange={handleChange}
                placeholder="Age" />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input 
                type="email" 
                name="email" 
                value={newFriend.email} 
                onChange={handleChange}
                placeholder="Email" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
    )
};

export default AddFriend;