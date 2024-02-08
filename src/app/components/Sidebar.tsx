// Assuming you've imported necessary dependencies and styles
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`} style={{ width: isOpen ? '230px' : '80px', transition: 'width 0.3s ease-in-out', position: 'fixed', left: 0, top: 0, height: '100vh', overflowY: 'auto', backgroundColor: '#ccc' }}>
      <Nav className="flex-column">
        <div className='navbar-logo'>SING</div>
        <Nav.Link href="#" className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faHome} size="lg" />
          {isOpen && <span className="ms-2">Dashboard</span>}
        </Nav.Link>
        <Nav.Link href="#" className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faChartLine} size="lg" />
          {isOpen && <span className="ms-2">Analytics</span>}
        </Nav.Link>
        <Nav.Link href="#" className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faUserFriends} size="lg" />
          {isOpen && <span className="ms-2">Users</span>}
        </Nav.Link>
        {/* Add more Nav.Link items as needed */}
      </Nav>
    </div>
  );
};

export default Sidebar;


