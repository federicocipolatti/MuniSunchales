import React from "react";
import { Navbar, Nav, Button, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import './NavbarMuni.css';
import { Link, useHistory } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Logout } from "../Logout/Logout";
import { Profile } from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";


export const NavbarMuni = () => {

    const history = useHistory();

    const { isAuthenticated } = useAuth0();

    return <Navbar sticky="top" expand="md" className="NavMuni">
        <Link to={'/'}><img src="images/logo-muni.jpg" alt="logo"className="logo-nav"/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
                className="mr-auto my-2 my-lg-0 NavMuni2"
                navbarScroll
            >
        <div className="botonesNav">
            <Nav.Link onClick={()=> history.push(`/`)} id="btn">Inicio</Nav.Link>
            <Nav.Link onClick={()=> history.push(`/noticias`)} id="btn">Noticias</Nav.Link>
            <DropdownButton id="btnDrop" title="Municipio" variant="light">
                <Dropdown.Item onClick={()=> history.push(`/autoridades`)} id="btn">Autoridades</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(`/organigrama`)} id="btn">Organigrama</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(`/gestion`)} id="btn">Gestión</Dropdown.Item> 
            </DropdownButton>
            <DropdownButton id="btnDrop" title="Perfil" variant="light">
                {isAuthenticated ? <>
                    <Profile/>
                    <Logout/>
                    </>
                    : <Login/>
                }    
            </DropdownButton>
        </div>
        </Nav>
        <div className="search">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Buscar"
                        className="mr-2"
                        aria-label="Buscar"
                    />
                    <Button id="btnBuscar">Buscar</Button>
                </Form>
            </div>
        </Navbar.Collapse>
    </Navbar>
    
}