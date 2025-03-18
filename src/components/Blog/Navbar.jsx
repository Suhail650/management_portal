import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/blogs">Blog Management</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/blogs">Home</Nav.Link>
          <Nav.Link as={Link} to="/create">Create Blog</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;