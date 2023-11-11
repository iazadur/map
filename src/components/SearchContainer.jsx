// Import necessary modules and components
import React from 'react';
import Input from './Input';
import SearchHeader from './SearchHeader';

// SearchContainer component
// It renders the SearchHeader and Input components
function SearchContainer() {
    // Render the component
    return (
        <>
            <SearchHeader /> {/* Search header */}
            <Input /> {/* Input field */}
        </>
    );
}

// Export the component
export default SearchContainer;