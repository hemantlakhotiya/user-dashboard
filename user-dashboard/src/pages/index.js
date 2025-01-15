
import SearchBar from '../components/SearchBar';
import NoUserFound  from '../components/NoUserFound';
import { DEFAULT_FILTER } from '../constant/filterOptions';
import UserList from '@/components/UserList';
import useUsers from '@/hooks/useUsers';
import Loader from '@/components/Loader';

  /**
   * Dashboard component that renders the user list with search and filter.
   * Fetches the list of users from the API and handles user search and filter updates.
   * The component renders a search bar and a list of users, with a loading spinner while the data is being fetched.
   * @return {ReactElement} The component element.
   */
const Dashboard = () => {
  const  {users, filteredUsers, loading ,  setFilteredUsers,  } = useUsers()

  
  // Handle user search and filter updates
  const handleSearch = (query) => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  /**
   * Filters the list of users based on the given city name.
   * If `city` is 'All Users', it resets the filter to show all users.
   * @param {string} city The city name to filter by.
   */
  const handleFilter = (city) => {
    if (city === DEFAULT_FILTER) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.address.city === city);
      setFilteredUsers(filtered);
    }
  };

  if (loading) {
    return <Loader />; // Show loading spinner
  }


  return (
    <div>
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredUsers.map(user => (
              <UserList key={user.id} user={user} />
        ))}
      </div>

      {filteredUsers.length === 0 && !loading && <NoUserFound />}
    </div>
  );
};

export default Dashboard;
