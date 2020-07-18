import React from 'react';
import Search from './Search';

const Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearchInputChange={handleSearchInputChange}/>
    </div>
  </nav>
);

export default Nav;

/*
const Nav = ({search}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search search={search}/>
    </div>
  </nav>
);

export default Nav;
*/