// Define interface for component props
interface MainContentProps {
  isSidebarOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isSidebarOpen }) => {
  // Calculate marginLeft based on the sidebar state
  const style = {
    flex: 1,
    backgroundColor: '#f8d7da',
    minHeight: "100vh",
    marginLeft: isSidebarOpen ? '2px' : '5px', // Adjust the values as per your sidebar width
    transition: 'margin-left 0.3s ease-in-out',
    padding: "4em"
  };

  return (
    <div className="main-content" style={style}>
      {/* Content goes here */}
      <p>Main content area</p>
    </div>
  );
};

export default MainContent;
