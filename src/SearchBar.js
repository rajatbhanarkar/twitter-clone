import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    return (
        <div className="searchBar">
            <SearchIcon /> <span>Search Twitter</span>
        </div>
    )
}

export default SearchBar;
