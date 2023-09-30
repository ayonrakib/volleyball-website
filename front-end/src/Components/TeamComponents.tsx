import React from 'react';
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'

export default function TeamComponent(props) {
    let playersBLock = [];
    for (let index = 0; index < props.playersName.length - 1; index++) {
        playersBLock.push(<div
            style={{ "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
            {index + 1}. {props.playersName[index + 1]}
            {<Image style={{ "height": "200px", "width": "200px" }}
                src={props.playersImageLocations[index + 1]}></Image>}
        </div>
        )
    }
    return (
        <Col>
            <Card>
                <div style={{ "display": "flex", "justifyContent": "center" }} >
                    <div style={{ "display": "flex", "justifyContent": "center", "flexDirection": "column" }}>
                        <Card.Img style={{ "height": "300px", "width": "250px" }} variant="top" src={props.playersImageLocations[0]} />
                        <Card.Title>{props.playersName[0]} ({props.teamName})</Card.Title>
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Text>
                                {playersBLock}
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    )
}