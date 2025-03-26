import React from 'react';
import './SidebarFilter.css';

const SidebarFilter = ({ groupedFilters, selectedFilters, onChange, onClear }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Filters</h3>
        <button className="clear-button" onClick={onClear}>Clear All</button>
      </div>
      {Object.entries(groupedFilters).map(([groupLabel, options]) => (
        <div key={groupLabel} className="filter-group">
          <h4>{groupLabel}</h4>
          <ul>
            {options.map((option) => (
              <li key={option}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option)}
                    onChange={() => onChange(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default SidebarFilter;
