import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
    <Navbar expand="lg" className="navbar justify-content-between sticky-top">
        <Container>
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>            
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <NavDropdown title="Contact Me" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Github</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Send Mail</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Navigation;