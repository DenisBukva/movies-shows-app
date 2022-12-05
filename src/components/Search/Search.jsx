import React from 'react';

const Search = ({ input }) => {
  return (
    <div className="search">
      <input
        type="text"
        name="text"
        placeholder="Search movies or Shows"
        onChange={input}
      />
    </div>
  );
};

export default Search;
