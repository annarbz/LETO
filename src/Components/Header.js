import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from './Logo.jpg'


//import Home from '../Pages/Home'
//import Contacts from '../Pages/Contacts'
//import Reviews from '../Pages/Reviews'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar
                    fixed="top"
                    collapseOnSelect
                    expand="sm"
                    bg="dark"
                    variant="dark"
                >
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="60"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav
                                fill
                                variant="tabs"
                                defaultActiveKey="/home"
                                className="mx-auto"
                            >
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/reviews"> Отзывы </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </>
        )
    }
}
