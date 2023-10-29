import React from 'react';
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
          <Navbar.Brand href='/'>Austin BD Volleyball</Navbar.Brand>
          <Nav className="alignNavbarRight">
            <NavDropdown title="Menu" id="collasible-nav-dropdown" drop='start'>
              {/* <NavDropdown.Item href='/admin'>
                  Admin
              </NavDropdown.Item> */}
              <NavDropdown.Item href='/rules'>
                Rules
              </NavDropdown.Item>
              <NavDropdown.Item href='/fixture'>
                Fixture
              </NavDropdown.Item>
              <NavDropdown.Item href='/players'>
                Players
              </NavDropdown.Item>
              {/* <NavDropdown.Item href='/captains'>
                Captains
              </NavDropdown.Item> */}
              <NavDropdown.Item href='/teams'>
                Teams
              </NavDropdown.Item>
              <NavDropdown.Item href='/practice'>
                Practice
              </NavDropdown.Item>
              <NavDropdown.Item href='/score'>
                Score
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}