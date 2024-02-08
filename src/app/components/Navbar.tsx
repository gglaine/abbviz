import type { FC } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

// Define a type for the props
interface NavbarProps {
  isSidebarOpen: boolean;
}

const Navbar: FC<NavbarProps> = ({ isSidebarOpen }) => {
  // Example usage of isSidebarOpen to adjust Navbar style
  const navbarStyle = {
    marginLeft: isSidebarOpen ? '230px' : '0', // Adjust as necessary for your layout
    transition: 'margin-left 0.3s ease-in-out',
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-4" style={navbarStyle}>
      <Container>
        <BootstrapNavbar.Brand href="#home">Your Brand</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {/* More Nav.Link components as needed */}
          </Nav>
          {/* Right aligned items */}
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            {/* You can add more links or buttons here */}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

