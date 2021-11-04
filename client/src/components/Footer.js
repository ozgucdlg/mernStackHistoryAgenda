import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Row  className="fixed-bottom " style={{ background:'black'}}>
            <Col  className="text-center py-4 text-white"   >
            Copyright &copy; History Agenda
            </Col>
        </Row>
    )
}

export default Footer
