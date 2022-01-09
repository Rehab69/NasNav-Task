import React, { Component } from 'react';
import { Navbar, Container, Nav,NavDropdown } from 'react-bootstrap';
import CardIcon from './cardIcon';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">NasNav shopping</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <CardIcon cardProducts={this.props.cardProducts} count={this.props.count}/>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavBar;