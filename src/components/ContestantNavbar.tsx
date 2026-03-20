import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function ContestantNavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Nov Country Swing</Navbar.Brand>

        <NavDropdown
          title="Actions"
          id="nav-dropdown"
          style={{ color: "white" }}
        >
          <NavDropdown.Item eventKey="1.1">Submit Scores</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Header>Order By</NavDropdown.Header>
          <NavDropdown.Item eventKey="4.1">Bib #</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Raw Score</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Not Scored at top</NavDropdown.Item>

          <NavDropdown.Item eventKey="4.5">Leader First Name</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6">Leader Last Name</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.7">
            Follower First Name
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.8">Follower Last Name</NavDropdown.Item>
        </NavDropdown>

        {/* <Button variant="outline-light">Submit </Button> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ margin: "10px auto" }}>
          <Nav className="me-auto">
            <Button
              variant="outline-light"
              style={{ width: "100px", alignSelf: "center" }}
            >
              Logout
            </Button>

            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContestantNavBar;
