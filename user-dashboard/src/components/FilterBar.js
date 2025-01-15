
/**
 * A select component that allows users to filter the list of users by city.
 * 
 * @param {string} selectedCity - The currently selected city.
 * @param {function} handleFilterChange - The function to call when the user selects a different city.
 * 
 * @returns {ReactElement} The select component.
 */
import { filterOptions } from '@/constant/filterOptions';
import PropTypes from 'prop-types';

/**
 * FilterBar component that renders a dropdown select for filtering users by city.
 *
 * @param {Object} props
 * @param {string} props.selectedCity - The currently selected city value.
 * @param {function} props.handleFilterChange - Callback function to handle city selection changes.
 * 
 * @returns {ReactElement} A select dropdown element that displays city options.
 */

const FilterBar = ({selectedCity, handleFilterChange}) => {
  return (
    <select value={selectedCity} onChange={handleFilterChange} className='p-2'>
        {filterOptions.map((city) => (
            <option key={city.value} value={city.value}>{city.label}</option>
        ))}
    </select>
  )
}

FilterBar.propTypes = {
  selectedCity: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterBar;


