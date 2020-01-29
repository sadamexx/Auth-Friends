import React from "react";
import {
    Card, 
    CardImg,   
    CardBody,
    CardTitle,
    CardSubtitle,   
    Col
} from "reactstrap";


  const FriendsCard = props => {
      return(
        <Col xs="12" s="6" md="4">
            <Card>
            <CardImg
          top
          width="100%"
          src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/03/SEC_57544369.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1"
          alt="Friends image"
        />
                <CardBody className={props.id}>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>Age: {props.age}</CardSubtitle>
                    <CardSubtitle>Email: {props.email}</CardSubtitle>
                </CardBody>
            </Card>
      </Col>
      )
  }


  export default FriendsCard;