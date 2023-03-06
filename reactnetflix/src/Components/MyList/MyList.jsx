import React from 'react';

import './MyList.css';

import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MyList extends React.Component {
    render() {
        return (
            <div className='mylist-container'>
                <h2 className='mylist-titulo'>Minha Lista</h2>
                <div>
                    <p>Texto</p>
                    <div className="mylist-card-group">
                        <CardGroup >
                            <Card bg="dark" text='light' style={{ width: '18rem' }}>
                                <Card.Header>Título</Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card bg="dark" text='light' style={{ width: '18rem' }}>
                                <Card.Header>Título</Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card bg="dark" text='light' style={{ width: '18rem' }}>
                                <Card.Header>Título</Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card bg="dark" text='light' style={{ width: '18rem' }}>
                                <Card.Header>Título</Card.Header>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="light">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyList;