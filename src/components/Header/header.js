import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

import './styles.css'


const header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >  <Link to="/">HYO Project</Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>

                        <LinkContainer className="linkcont" to="/about">
                            <NavItem>About</NavItem>
                        </LinkContainer>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>

        </div>
    )
}

export default header
