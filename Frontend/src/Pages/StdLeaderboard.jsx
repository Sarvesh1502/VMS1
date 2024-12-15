import React, { useState } from 'react';
import './StdLeaderboard.css';

const mockData = [
  { name: 'Utkarsh', branch: 'CSE', section: 'A', hours: 120 },
  { name: 'Atul', branch: 'ECE', section: 'B', hours: 110 },
  { name: 'Vignesh', branch: 'CSE', section: 'A', hours: 105 },
  { name: 'Bruce Wayne', branch: 'ME', section: 'C', hours: 100 },
  { name: 'Chris Evans', branch: 'EEE', section: 'A', hours: 95 },
];

function StdLeaderboard() {
  const [searchBranch, setSearchBranch] = useState('');
  const [searchSection, setSearchSection] = useState('');
  const [filteredData, setFilteredData] = useState(mockData);

  const handleSearch = () => {
    const filtered = mockData.filter(
      (student) =>
        (searchBranch ? student.branch.toLowerCase() === searchBranch.toLowerCase() : true) &&
        (searchSection ? student.section.toLowerCase() === searchSection.toLowerCase() : true)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="leaderboard-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Branch (e.g., CSE)"
          value={searchBranch}
          onChange={(e) => setSearchBranch(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search Section (e.g., A)"
          value={searchSection}
          onChange={(e) => setSearchSection(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div className="leaderboard-list">
        {filteredData.map((student, index) => (
          <div className="leaderboard-card" key={index}>
            <div className="details">
              <h3>{student.name}</h3>
              <p>Branch: {student.branch}</p>
              <p>Section: {student.section}</p>
              <p>Hours: {student.hours}</p>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <p className="no-results">No results found. Please refine your search.</p>
        )}
      </div>
    </div>
  );
}

export default StdLeaderboard;
