import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'

import moment from 'moment'
import {LinkContainer} from 'react-router-bootstrap'

import { MdModeEdit,MdDelete } from 'react-icons/md'

import { deleteMemory } from '../axios/index.js'

const Memory = ({ memory }) => {
    return (
        <>

            <Container  style={{marginBottom:'10rem'}}>

            <Card className='rounded py-3 my-3'>
                <Card.Img variant="top" src={memory.image}/>

                <Card.Body>
                    <Card.Title style={{color:'darkblue'}}>{memory.title}</Card.Title>
                    
                    <Card.Text>
                    {memory.content}
                    </Card.Text>

                    <Card.Title>
                        <span style={{color:'darkblue'}}>Creator :</span> {memory.creator}
                    </Card.Title>

                    <Card.Subtitle>{moment(moment.createdAt).fromNow()}
                    </Card.Subtitle>

                    <Button  style={{ width: '100%', background:'white', color:'#bd301c' }}>Go to memory
                    </Button>

                </Card.Body>

                <Card.Footer style={{display: 'flex', justifyContent: 'space-between' }} className = 'bg-white pb-0'>
                   
                    <LinkContainer  
                    to={`/update/${memory._id}`}  
                    style={{cursor: 'pointer'}} >

                        <MdModeEdit  size={25} color='blue'/>                      

                    </LinkContainer>

                    <MdDelete  
                    size={25} 
                    color='red' 
                    style={{cursor: 'pointer'}}  
                    onClick={() => 
                        deleteMemory(memory._id)                  
                    
                    }              
                
                    />

                </Card.Footer>

            </Card>
            </Container>        
                            
        </>
    )
}

export default Memory
