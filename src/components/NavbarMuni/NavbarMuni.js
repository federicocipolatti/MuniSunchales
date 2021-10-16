import React from "react";
import { Navbar, Nav, Button, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import './NavbarMuni.css';


export const NavbarMuni = () => {
    return <Navbar expand="md" className="NavMuni">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="NavMuni2">
        <Nav
                className="mr-auto my-2 my-lg-0"
                navbarScroll
            >
        <div className="botonesNav">
            <Nav.Link href="#action1" id="btn">Home</Nav.Link>
            <Nav.Link href="#action2" id="btn">Link</Nav.Link>
            <DropdownButton id="btnDrop" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
        </Nav>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Buscar"
                className="mr-2"
                aria-label="Buscar"
            />
            <Button id="btnBuscar">Buscar</Button>
        </Form>
        </Navbar.Collapse>
    </Navbar>
    
}