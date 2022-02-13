import React from 'react'

import { Navbar, Nav, Button } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

import {FcEditImage} from 'react-icons/fc'

import {AiOutLineLogin} from 'react-icons/AiOutLineLogin'



const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>

                <LinkContainer to='/'   className='mx-5'>
                    <Navbar.Brand href="#home" className='justify-content-start' >HistoryAgenda</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end' />

                <Nav>
                    <LinkContainer to='/create'>
                        <Nav.Link>
                            <Button variant="outline-warning" className='justify-content-end'>
                                <FcEditImage className='mr-2' size={20}/>Create History</Button>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/Auth'>
                        <Nav.Link>
                            <Button variant="outline-light" className='justify-content-end'>
                                <AiOutLineLogin size={20} className='mr-2'/>Sign In</Button>
                        </Nav.Link>
                    </LinkContainer>

                </Nav>

            </Navbar>

        </header>
    );
}


export default Header
