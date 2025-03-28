import React, { useState } from 'react'
import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const AuthScreen = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        try {
            if(isSignup) {
                const { data } = await axios.post('http://localhost:5000/user/signup', formData)
                localStorage.setItem('profile', JSON.stringify(data))
                setSuccess('Sign up successful! Redirecting to profile...')
                setTimeout(() => {
                    history.push('/profile')
                }, 2000)
            } else {
                const { data } = await axios.post('http://localhost:5000/user/signin', {
                    email: formData.email,
                    password: formData.password
                })
                localStorage.setItem('profile', JSON.stringify(data))
                setSuccess('Sign in successful! Redirecting to profile...')
                setTimeout(() => {
                    history.push('/profile')
                }, 2000)
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong')
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
                <h2 className="text-center mb-4">{isSignup ? 'Sign Up' : 'Sign In'}</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    {isSignup && (
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    )}
                    <Button type="submit" variant="primary" className="w-100 mb-3">
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                </Form>
                <Button
                    variant="link"
                    onClick={() => {
                        setIsSignup(!isSignup)
                        setError('')
                        setSuccess('')
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        })
                    }}
                    className="w-100"
                >
                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </Button>
            </Col>
        </Row>
    )
}

export default AuthScreen