import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar fixed='top' expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#header">مجدى عبد الفتاح</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#header">الرئيسيه</Nav.Link>
                        <Nav.Link href="#serv">التسبيح</Nav.Link>
                        <Nav.Link href="#doaa">الدعاء</Nav.Link>
                        <Nav.Link href="#qr">القرءان</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
