import React from 'react'

import { Navbar, Nav, Button } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'



const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>

                <LinkContainer to='/'>
                    <Navbar.Brand href="#home" className='justify-content-start'>HistoryAgenda</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end' />

                <Nav>
                    <LinkContainer to='/create'>
                        <Nav.Link>
                            <Button variant="outline-warning" className='justify-content-end'>Create History</Button>
                        </Nav.Link>
                    </LinkContainer>

                </Nav>

            </Navbar>

        </header>
    );
}


export default Header
