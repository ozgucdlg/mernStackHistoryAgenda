import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Memory = ({ memory }) => {
    return (
        <>


            <Card style={{ width: '18rem', border: '1px solid black', background: '#bd301c'}}>
                <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title>{memory.title}</Card.Title>
                    <h2>{memory.creator}</h2>
                    <Card.Text>
                    {memory.content}
                    </Card.Text>
                    <Button variant="primary">Go to memory</Button>
                </Card.Body>
            </Card>
            
                
            

        </>
    )
}

export default Memory
