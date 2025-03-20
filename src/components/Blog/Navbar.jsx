import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/blogs' className='fs-2 mx-auto '>
          Blog Management
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to='/blogs'>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to='/create'>
            Create Blog
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
