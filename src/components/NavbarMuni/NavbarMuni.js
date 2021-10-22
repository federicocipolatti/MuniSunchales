import React from "react";
import { Navbar, Nav, Button, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import './NavbarMuni.css';
import { Link, useHistory } from 'react-router-dom';


export const NavbarMuni = () => {

    const history = useHistory();

    return <Navbar sticky="top" expand="md" className="NavMuni">
        <Link to={'/'}><img src="images/logo-muni.jpg" alt="logo"className="logo-nav"/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="NavMuni2">
        <Nav
                className="mr-auto my-2 my-lg-0"
                navbarScroll
            >
        <div className="botonesNav">
            <Nav.Link onClick={()=> history.push(`/`)} id="btn">Inicio</Nav.Link>
            <Nav.Link onClick={()=> history.push(`/News`)} id="btn">Noticias</Nav.Link>
            <DropdownButton id="btnDrop" title="Municipio" variant="light">
                <Dropdown.Item href="#/action-1">Autoridades</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Organigrama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Gestión</Dropdown.Item>
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