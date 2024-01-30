import React from "react";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-wrapper">
        <i className="bi bi-search"></i>
        <input
          name="search-input"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="search-buttom">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
