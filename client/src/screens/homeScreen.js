import React, { useEffect } from 'react'
import Memory from '../components/Memory.js'
import { useDispatch, useSelector} from 'react-redux'
import { fetchMemories } from '../actions/memoryActions.js'
import { Spinner, Row, Col} from 'react-bootstrap'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const memories = useSelector((state) => state.memories) 

    useEffect(() => {
        dispatch(fetchMemories())
    }, [dispatch])
     
    return (        
        <>
            <h2>WELCOME TO THE HOMESCREEN</h2>
            {!memories.length ? (
                <Spinner animation='border' /> 
            ) : ( 
                <Row>
                    {memories.map((memory) => (
                        <Col 
                            sm={12}
                            md={6}
                            lg={3}
                            xl={4}
                            className='m-auto'
                            key={memory._id}
                        >
                            <Memory memory={memory} />
                        </Col> 
                    ))}                   
                </Row>            
            )}
        </>        
    )
}

export default HomeScreen
