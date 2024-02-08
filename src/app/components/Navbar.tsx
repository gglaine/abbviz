import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import CSS for custom styles

// Define a type for the props
interface NavbarProps {
  isSidebarOpen: boolean;
}

const Navbar: FC<NavbarProps> = ({ isSidebarOpen }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    // Fetch the user avatar image URL
    fetch('https://picsum.photos/200')
      .then(response => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error('Failed to fetch avatar image');
      })
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setAvatarUrl(imageUrl);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Example usage of isSidebarOpen to adjust Navbar style
  const navbarStyle = {
    marginLeft: isSidebarOpen ? '23px' : '0', // Adjust as necessary for your layout
    transition: 'margin-left 0.3s ease-in-out',
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-4" style={navbarStyle}>
      <Container>
        <BootstrapNavbar.Brand href="#home">ABB-DO</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex align-items-center me-auto">
            <FontAwesomeIcon icon={faSearch} className="me-2" />
            <FormControl type="search" placeholder="Search Dashboard" aria-label="Search" />
          </Form>
          <Nav className="me-3 align-items-center">
            <Dropdown align="end">
              <Dropdown.Toggle id="dropdown-avatar" className="bg-transparent border-0">
                <img src={avatarUrl} alt="Avatar" className="rounded-circle" style={{ width: '30px', height: '30px' }} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {/* Dropdown menu items here */}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link className="me-2">admin</Nav.Link>
            <span className="badge bg-danger me-2 badge-circle d-flex align-items-center justify-content-center">5</span> {/* Added flex utilities for vertical alignment */}
            <FontAwesomeIcon icon={faChevronDown} className="me-2 align-self-center" />
            <FontAwesomeIcon icon={faCog} className="me-2 align-self-center" />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
