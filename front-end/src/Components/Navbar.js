import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";

export default function NavBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={props.showWelcomePage}>Austin BD Volleyball</Navbar.Brand>
          <Nav className="alignNavbarRight">
            <Nav.Link href="#Announcements">Announcements</Nav.Link>
            <NavDropdown title="Tournament" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={props.showRulesPage}>
                Rules
              </NavDropdown.Item>
              <NavDropdown.Item onClick={props.showFixturePage}>
                Fixture
              </NavDropdown.Item>
              <NavDropdown.Item onClick={props.showPlayersPage}>
                Players
              </NavDropdown.Item>
              <NavDropdown.Item onClick={props.showCaptainsPage}>
                Captains
              </NavDropdown.Item>
              <NavDropdown.Item>
                Score
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}