import { useEffect, useState } from 'react'
import axios from 'axios';

/**
 * Fetches a list of users from the API and handles filtering by city.
 *
 * If `param` is a string, it fetches users from the API with the given parameter.
 * If `param` is undefined, it fetches all users.
 *
 * The hook returns an object with the following properties:
 *  - `users`: The original list of users.
 *  - `filteredUsers`: The list of users filtered by the given city.
 *  - `loading`: A boolean indicating whether the data is still loading.
 *  - `setFilteredUsers`: A function to update the `filteredUsers` state.
 *
 * @param {string | undefined} param - The parameter to pass to the API.
 * @returns {{ users: any[], filteredUsers: any[], loading: boolean, setFilteredUsers: (users: any[]) => void }}
 */
const useUsers = (param) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${param ??  ''}`)
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching users:', err);
        setLoading(false);
      });
  }, [param]);

 

  return { users, filteredUsers, loading,  setFilteredUsers };
}

export default useUsers

