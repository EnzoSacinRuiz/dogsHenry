import React from 'react';
import './layout.styles.css'; // Import your CSS file

const Layout = ({ children }) => {
  return (
    <div className="landing-container">
      <div className="background-image" />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;