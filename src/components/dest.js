import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import "./deststyle.css"

function Choix({ region, price, country, city, starts, id , hotel, img, }) {
    return (
        <Card id= "carte" className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{hotel}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Region:</Col>
                        <Col>{region}</Col>
                    </Row>
                    <Row>
                        <Col>Country:</Col>
                        <Col>{country}</Col>
                    </Row>
                    <Row>
                        <Col>City:</Col>
                        <Col>{city}</Col>
                    </Row>
                    <Row>
                        <Col>Stars:</Col>
                        <Col>{starts}</Col>
                    </Row>
                    <Row>
                        <Col>Price/night:</Col>
                        <Col>{price}</Col>
                    </Row>
                    
                </Card.Text>
                <Container className='text-center'>
                    <Button as={Link} to="/booking" variant="success">Book</Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Choix;