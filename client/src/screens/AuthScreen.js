import {React,useState} from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

const AuthScreen = () => {

    const[login, setLogin] = useState(true);


  return (
    <>
    <Container>

        <Row className="justify-conetent-center">
            <Col xs={12} md={6} >
            {
            login  ? 
            
            <Form className="allign-content-center mt-3">
                <h1  className="text-center mb-3">SIGN IN PLEASE</h1>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    TYPE='email'
                    placeholder='type your email'></Form.Control>                   
                    
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    TYPE='password'
                    placeholder='type your password'></Form.Control>                   
                    
                </Form.Group>
                <Button block type='submit'>Sign in</Button>

                <Form.text as='large' className='text-center mt-2'>Do you not have an account yet {' '} <span 
                onClick={(e)=> setLogin(!login)}
                style={{fontWeight:'bold',  cursor:'pointer'}}>
                     </span>
                     Create an account</Form.text>
            
            
            </Form>
            
            
            
            : <h1>LOG IN PLRASE</h1>
            }
            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default AuthScreen