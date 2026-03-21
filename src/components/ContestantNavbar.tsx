import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { InfoSquareFill } from "react-bootstrap-icons";

function ContestantNavBar() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
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
            <NavDropdown.Item eventKey="4.3">
              Not Scored at top
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="4.5">
              Leader First Name
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6">Leader Last Name</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.7">
              Follower First Name
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.8">
              Follower Last Name
            </NavDropdown.Item>
          </NavDropdown>

          <InfoSquareFill
            color="white"
            size="20px"
            style={{ marginLeft: "10px" }}
            onClick={handleShow}
          ></InfoSquareFill>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ margin: "10px auto" }}
          >
            <Nav className="me-auto">
              <Button
                variant="outline-light"
                style={{
                  width: "100px",
                  alignSelf: "center",
                  marginLeft: "10px",
                }}
              >
                Logout
              </Button>

              <Nav.Link
                href="#link"
                style={{ alignSelf: "center", marginLeft: "10px" }}
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <InfoSquareFill color="black" size="20px" /> Contest Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span style={{ fontWeight: "bold" }}>Logged In As:</span> Billy Ray
          Shaver <br />
          <span style={{ fontWeight: "bold" }}>Contest:</span> Novice Country
          Swing <br />
          <span style={{ fontWeight: "bold" }}>Event:</span> Chicago Classic
          2026 <br />
          <span style={{ fontWeight: "bold" }}>Instructions:</span> Give each
          contestant a raw score from 00.1 to 99.9. The rank will be
          automatically calculated. The contestant with the highest raw score
          will be ranked #1. When you are finished, click on the "Actions"
          dropdown and select "Submit Scores". Sorting can be done from the
          "Action" dropdown. Reopen this dialog by clicking on this icon{" "}
          <InfoSquareFill color="black" size="20px" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ visibility: "hidden" }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContestantNavBar;
