import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'

import {FcEditImage} from 'react-icons/fc'

import {AiOutlineLogin} from 'react-icons/ai'

const Header = () => {
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        const profile = localStorage.getItem('profile')
        if (profile) {
            setUser(JSON.parse(profile))
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('profile')
        setUser(null)
        history.push('/')
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>History Agenda</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {user ? (
                            <>
                                <LinkContainer to="/profile">
                                    <Nav.Link>Welcome, {user.result.firstName}!</Nav.Link>
                                </LinkContainer>
                                <Button variant="outline-light" onClick={logout}>Logout</Button>
                            </>
                        ) : (
                            <LinkContainer to="/auth">
                                <Nav.Link>Sign In</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
