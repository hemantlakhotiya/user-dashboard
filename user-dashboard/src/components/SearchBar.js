// components/SearchBar.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import FilterBar from './FilterBar';
import SearchBox from './SearchBox';

/**
 * A search bar component that contains both a search box and a filter bar.
 *
 * @param {function} onSearch - Callback function to handle search changes.
 * @param {function} onFilter - Callback function to handle filter changes.
 *
 * @returns {ReactElement} The search bar component.
 */
const SearchBar = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All Users');

  /**
   * Handles changes to the search box by updating the search query state
   * and calling the onSearch callback with the new search query.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object.
   */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  /**
   * Handles changes to the filter bar by updating the selected city state
   * and calling the onFilter callback with the new selected city.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The event object.
   */
  const handleFilterChange = (e) => {
    setSelectedCity(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="search-bar m-4 flex justify-between items-center">
      <SearchBox searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <FilterBar selectedCity={selectedCity} handleFilterChange={handleFilterChange} />
    </div>
  );
};


SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default SearchBar;

