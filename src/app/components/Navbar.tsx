import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Form, FormControl, InputGroup, Dropdown } from 'react-bootstrap';
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
        <BootstrapNavbar.Brand href="#home"></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex align-items-center me-auto">
            <InputGroup>
              <InputGroup.Text className="bg-transparent border-0">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <FormControl type="search" placeholder="Search Dashboard" aria-label="Search" className="border-0" style={{ background: 'none' }} />
            </InputGroup>
          </Form>
          <Nav className="me-3 align-items-center">
            <Dropdown align="end">
              <Dropdown.Toggle id="dropdown-avatar" className="bg-transparent border-0">
                <img src={avatarUrl} alt="Avatar" className="rounded-circle" style={{ width: '30px', height: '30px' }} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="p-1" style={{ width: '200px' }}>
                {/* Dropdown menu items here */}
                <h6>You have 12 notifications</h6>
                <div className="notification-item d-flex align-items-center">
                  <img src="notification-img-url" alt="Notification" className="mr-2" />
                  <div>
                    <p>Notification text</p>
                    <small>2 hours ago</small>
                  </div>
                </div>
                <hr />
                <small>Synced at 21 avril 2023 12:13</small>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link className="me-2 align-self-center">admin</Nav.Link> {/* Align admin text vertically */}
            <span className="badge bg-danger badge-circle d-flex align-items-center justify-content-center me-2">5</span> {/* Badge circle */}
            <FontAwesomeIcon icon={faChevronDown} className="me-2 align-self-center" />
            <FontAwesomeIcon icon={faCog} className="me-2 align-self-center" />
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
