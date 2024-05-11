
import './SearchBar.css'; 
import React from 'react';



class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-section">
        <input type="text" className="search-input" placeholder="Search by name..." />
        <select className="dropdown-niche">
          <option value="beauty">Beauty</option>
          <option value="fashion">Fashion</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="travel">Travel</option>
          <option value="education">Education</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
        <input type="text" className="search-input" placeholder="Search by location..." />
        <div className="sort-section">
          <span>Sort by:</span>
          <select className="dropdown-sort">
            <option value="newest">Newest</option>
            <option value="compatible">Most Compatible</option>
            <option value="nearest">Nearest Location</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchBar;
