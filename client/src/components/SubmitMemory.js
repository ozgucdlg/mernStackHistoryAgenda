import React from 'react'
import ReactFileBase64 from 'react-file-base64'
import { Button, Form} from 'react-bootstrap'


const SubmitMemory = () => {
    return <> 
            <Form onSubmit={{}} >
                <Form.Group>
                    <h1 className="my-4" style={{textAlign: 'center'}}> Create a  Memory</h1>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Title</Form.Label>  
                    <Form.Control
                    name="title"
                    type="text"></Form.Control>                             
                </Form.Group>

                <Form.Group>
                    <Form.Label>Author</Form.Label>  
                    <Form.Control
                    name="author"
                    type="text"></Form.Control>                             
                </Form.Group>

                <Form.Group>
                    <Form.Label>Content</Form.Label>  
                    <Form.Control
                    name="content"
                    type="text"
                    as="textarea"
                    rows={5}></Form.Control>                             
                </Form.Group>

                <Form.Group  className="mt-3">
                    <ReactFileBase64
                    
                    type='file'
                    multiple={true}
                    onDone={() => {}}
                    />


                </Form.Group >

                <Button type="submit"  className="mt-2"  style={{width: '100%'}}>Submit</Button>

            </Form>
    
    </>
}

export default SubmitMemory
