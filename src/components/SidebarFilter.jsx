import React from 'react';
import './SidebarFilter.css'; // Add styles for the sidebar

const SidebarFilter = ({ filters, renderFilter }) => {
  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>{renderFilter(filter)}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarFilter;
