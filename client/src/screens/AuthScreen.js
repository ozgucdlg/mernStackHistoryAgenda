import {React,useState} from 'react'
import {Container,Row,Col,Form,Button} from 'react-bootstrap'

const AuthScreen = () => {

    const[login,setLogin] =useState(true);


  return (
    <>
    <Container>

        <Row className="justify-conetent-center">
            <Col xs={12} md={6} >
            {
            login  ? 
            
            <Form className="allign-content-center mt-3">
                <h1>SIGN IN PLEASE</h1>
            
            
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