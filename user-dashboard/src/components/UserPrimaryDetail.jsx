import React from 'react'
import PropTypes from 'prop-types'

/**
 * A component that renders a user's primary details, including name and email.
 * @param {Object} props
 * @param {Object} props.user - The user object to render.
 * @returns {ReactElement} The component element.
 */
const UserPrimaryDetail = ({ user }) => {
  return (
    <>
      <h1 className='text-md text-black font-bold'>{user.name}</h1>
      <p>Email: {user.email}</p>
    </>
  )
}

UserPrimaryDetail.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired
}

export default UserPrimaryDetail
