import { useState, CSSProperties } from 'react';
import Sidebar from './app/components/Sidebar';
import Navbar from './app/components/Navbar';
import MainContent from './app/components/MainContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleButtonStyle: CSSProperties = {
    position: 'fixed',
    left: `${isSidebarOpen ? 230 : 50}px`,
    top: '10px',
    zIndex: 1200,
    cursor: 'pointer',
    background: '#fff',
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '4px',
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} />
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={toggleButtonStyle} className="sidebar-toggle-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="app-content" style={{ marginLeft: isSidebarOpen ? '230px' : '50px' }}>
        <Navbar isSidebarOpen={isSidebarOpen}/>
        <MainContent isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default App;
