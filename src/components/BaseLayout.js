

import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path as per your project structure

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout_content">
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
