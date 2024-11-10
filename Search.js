import React from 'react';

function Search() {
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Searching...');
  };

  return (
    <section className="food-search">
      <form onSubmit={handleSearch}>
        <input type="search" placeholder="Search for Food.." required />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Search;
