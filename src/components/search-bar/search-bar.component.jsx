import React from 'react';
import './search-bar.styles.css';

const SearchBar = (props) => {
    return ( 
        <div className="search-bar-container">
            <input name="search" value={props.value} onChange={props.onChange} className="search-bar" placeholder="Search For The Movie" type="text" />
        </div>
     );
}
 
export default SearchBar;