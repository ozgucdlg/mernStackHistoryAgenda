import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ProfileScreen = () => {
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        const profile = localStorage.getItem('profile')
        if (!profile) {
            history.push('/auth')
            return
        }
        setUser(JSON.parse(profile))
    }, [history])

    if (!user) return null

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h3">Personal Profile</Card.Header>
                        <Card.Body>
                            <Card.Title>Welcome, {user.result.firstName} {user.result.lastName}!</Card.Title>
                            <Card.Text>
                                <strong>Email:</strong> {user.result.email}<br/>
                                <strong>Member since:</strong> {new Date(user.result.createdAt).toLocaleDateString()}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileScreen 