import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">React Netflix</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Início</Nav.Link>
                                <Nav.Link href="/series">Séries</Nav.Link>
                                <Nav.Link href="/movies">Filmes</Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown title="Usuário" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/account">Conta</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#quit">
                                        Sair
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;