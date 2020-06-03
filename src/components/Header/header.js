import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './styles.css'


const header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >  <Nav.Link> <Link to="/">HYO Project</Link></Nav.Link></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>

                        <Nav.Item>
                            <Nav.Link> <Link to="/about">About</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://github.com/hagoraya/HYO-Frontend">Github</Nav.Link>
                        </Nav.Item>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>

        </div>
    )
}

export default header
