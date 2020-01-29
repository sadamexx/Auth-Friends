import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsCard from "../components/FriendsCard"
import { Container, Row } from "reactstrap";
import AddFriend from "./AddFriend";



const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res)
            setFriendsList(res.data);
        })
        .catch(err => {
            console.log('friendslist get error', err)
        });
    }, []);

   
        return(
           <div> 
            <Container>
                <Row>
                
                    {friendsList.map(pal => {
                        return(
                            <FriendsCard
                            key={pal.id}
                            name={pal.name}
                            age={pal.age}
                            email={pal.email}
                            />
                        )
                    })}
                    <AddFriend />
                </Row>
            </Container>
            
            </div>
        )
} 

export default FriendsList;
