import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="p2">
            <input 
                type="search" 
                placeholder="search robots" 
                className="pa3 ba b--green bg-lightest-blue"
                onChange={searchChange}
            / >
        </div>
    );
}
export default SearchBox;