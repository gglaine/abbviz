import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const logoText = isOpen ? 'SING APP' : 'SING';

  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-content">
        <div className='navbar-logo' style={{ color: 'rgb(111,175,248)', fontWeight: 'bold' }}>{logoText}</div>
        <Nav className="sidebar-nav">
          <Nav.Link href="#" className="sidebar-link">
            <FontAwesomeIcon icon={faHome} size="lg" />
            {isOpen && <span className="link-text">Dashboard</span>}
          </Nav.Link>
          <Nav.Link href="#" className="sidebar-link">
            <FontAwesomeIcon icon={faChartLine} size="lg" />
            {isOpen && <span className="link-text">Analytics</span>}
          </Nav.Link>
          <Nav.Link href="#" className="sidebar-link">
            <FontAwesomeIcon icon={faUserFriends} size="lg" />
            {isOpen && <span className="link-text">Users</span>}
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;





