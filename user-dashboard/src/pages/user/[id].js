
import { useRouter } from 'next/router';
import UserDetails from '@/components/UserDetails';
import Loader from '@/components/Loader';
import useUsers from '@/hooks/useUsers';

/**
 * A page component that renders the details of a user by ID.
 *
 * The component fetches the user data from the API and renders the user details
 * component. If the data is still being fetched, a loading spinner is shown.
 *
 * @return {ReactElement} The user details component element.
 */
const UserDetail = () => {
  const { query } = useRouter();
  const userId = query.id;

  const { users:user, loading } = useUsers(userId);

  if (loading) {
    return <Loader />;
  }

  return (
    <UserDetails user={user} />
  );
};

export default UserDetail;
