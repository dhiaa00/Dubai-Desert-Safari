import React from "react";

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="search-wrapper">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="What are you looking for?" />
        <button className="search-buttom">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
