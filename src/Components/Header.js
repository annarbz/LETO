import React, { Component } from "react";
import { Button, FormControl, Nav, Navbar, Container, Form } from "react-bootstrap";
import logo from './Logo.jpg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';

export default class Header extends Component {
    render() {

        return (
            <>
                <Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <Container>
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
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/about"> Отзывы </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder=""
                                    className="me-sm-2"
                                />
                                <Button variant="outline-info">Поиск</Button>


                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contacts" component={Contacts}/>
                    </Routes>
                </Router>
            </>
        )

    }
}