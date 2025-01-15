import React from 'react'
import PropTypes from 'prop-types'
import UserCard from './UserCard'
import UserPrimaryDetail from './UserPrimaryDetail'
import Navigate from './Navigate'

/**
 * A UserList component that renders a UserCard with a UserPrimaryDetail and a
 * link to view the user's details.
 *
 * @param {Object} user - The user object to render.
 *
 * @return {ReactElement} The component element.
 */
const UserList = ({ user }) => {
  return (
    <UserCard>
      <div>
        <UserPrimaryDetail user={user} />
        <p>{user?.address?.city}</p>
        <Navigate href={`/user/${user.id}`} className='text-blue-600 hover:underline' label={'View Details'}/>
      </div>
    </UserCard>
  )
}

UserList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string
    })
  }).isRequired
}

export default UserList

