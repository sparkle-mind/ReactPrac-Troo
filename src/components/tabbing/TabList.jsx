export const TabList = ({ children, onSelectValue, isSelect }) => {
  
    return (
      <li>
        <button 
          onClick={onSelectValue} 
          className={`btn-primary ${isSelect ? 'activeTab' : ''}`}
        >
          {children}
        </button>
      </li>
    );
  };
  