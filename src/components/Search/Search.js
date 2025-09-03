import React, { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [sortBy, setSortBy] = useState('relevance');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery, searchType, sortBy);
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <form onSubmit={handleSearch}>
          <div className="search-input-group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for books..."
              className="search-input"
              aria-label="Search for books"
            />
            <button type="submit" className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          <div className="filter-options">
            <div className="filter-group">
              <label htmlFor="searchType">Search by:</label>
              <select
                id="searchType"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="select-filter"
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="subject">Subject</option>
                <option value="all">All</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sortBy">Sort by:</label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select-filter"
              >
                <option value="relevance">Relevance</option>
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
