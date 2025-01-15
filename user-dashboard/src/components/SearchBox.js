import React from 'react'
import PropTypes from 'prop-types'

/**
 * A SearchBox component that renders a text input for searching users by name.
 *
 * @param {string} searchQuery - The current search query.
 * @param {function} handleSearchChange - The function to call when the user types a new search query.
 *
 * @returns {ReactElement} The component element.
 */
const SearchBox = ({searchQuery, handleSearchChange}) => {
  return (
    <input 
        type="text" 
        placeholder="Search by name..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
        className='p-2 w-3/5'
  />
  )
}

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired
}

export default SearchBox

