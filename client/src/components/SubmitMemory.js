import React, { useState } from 'react'
import ReactFileBase64 from 'react-file-base64'
import { Button, Form } from 'react-bootstrap'

import * as api from '../axios/index.js'

import {useHistory} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {createMemory} from '../actions/memoryActions'


const SubmitMemory = () => {

    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: '',

        

    })

    const history = useHistory()
    const dispatch=useDispatch()


    return (<>
        <Form onSubmit={(e) => { 
            e.preventDefault()
            dispatch(createMemory(memoryData)) 

            history.push('/')
        }    
        }
        ><Form.Group>
                <h1 className="my-4" style={{ textAlign: 'center' }}> Create a  Memory</h1>
            </Form.Group>

            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name="title"
                    type="text"
                    onChange={(e) => 
                        setMemoryData({ ...memoryData, title: e.target.value })
                    
                    }
                ></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                    name="creator"
                    type="text"
                    onChange={(e) => 
                        setMemoryData({ ...memoryData, creator: e.target.value })
                    
                    }
                ></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    name="content"
                    type="text"
                    as="textarea"
                    rows={5}
                    onChange={(e) => 
                        setMemoryData({ ...memoryData, content: e.target.value })
                    
                    }
                ></Form.Control>
            </Form.Group>

            



            <Form.Group className="mt-3">
                <ReactFileBase64

                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => {
                        setMemoryData({ ...memoryData, image: base64 })
                        }
                    }
                />
            </Form.Group >

            <Button type="submit" className="mt-2" style={{ width: '100%' }}>Submit</Button>

        </Form>

    </>
    )
}

export default SubmitMemory
