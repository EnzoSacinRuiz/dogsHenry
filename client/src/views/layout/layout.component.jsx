import React from 'react';
import './layout.styles.css'; 

const Layout = ({ children }) => {
  return (
    <div className="landing-container">
      <div className="background-image" />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;