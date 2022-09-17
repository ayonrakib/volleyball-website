import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Austin BD Volleyball</Navbar.Brand>
          <Nav className="alignNavbarRight">
            <Nav.Link href="#Announcements">Announcements</Nav.Link>
            <NavDropdown title="Tournament" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Schedule">
                Schedule
              </NavDropdown.Item>
              <NavDropdown.Item href="#Profiles">
                Profiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#Rules">
                Rules
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Score
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}