import React, { useEffect,useState } from 'react'
import ReactFileBase64 from 'react-file-base64'
import { Button, Form } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {updateMemory} from '../actions/memoryActions'
import {fetchMemory} from '../axios/index.js'

const UpdateMemory = ({id}) => {
    const dispatch =  useDispatch()

    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: '',
    })

    useEffect(()=>{
        const getMemo = async () =>{
            const { data } =  await fetchMemory(id)
            setMemoryData(data)
        }
        getMemo()
    }, [id])

    const history = useHistory()
    return (<>
        <Form onSubmit={(e) => { 
            e.preventDefault()
            dispatch(updateMemory(id, memoryData))
            history.push('/')
        }}
        ><Form.Group>
                <h1 className="my-4" style={{ textAlign: 'center' }}> Update the memory</h1>
            </Form.Group>

            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name="title"
                    type="text"
                    onChange={(e) => 
                        setMemoryData({ ...memoryData, title: e.target.value })
                    
                    }
                    value={memoryData.title}
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
                    value={memoryData.creator}
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
                    value={memoryData.content}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-3">
                <ReactFileBase64
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => {
                        setMemoryData({ ...memoryData, image: base64 })                        
                    }}
                    value={memoryData.image}
                />
            </Form.Group >

            <Button type="submit" className="mt-2" style={{ width: '100%' }}>Submit</Button>

        </Form>

    </>
    )
}

export default UpdateMemory
