import React from 'react'
import PropTypes from 'prop-types'
import UserCard from './UserCard'
import UserPrimaryDetail from './UserPrimaryDetail'
import Navigate from './Navigate'



/**
 * A component that renders a user's details on a page.
 * 
 * This component renders a user's details on a page, with a button to navigate back to the dashboard.
 * 
 * @param {Object} props
 * @param {Object} props.user - The user object to render.
 * 
 * @return {ReactElement} A component element.
 */
const UserDetails = ({ user }) => {
    return (
        <div className='flex flex-col items-center'>
            <UserCard className='sm:w-1/2 sm:mx-auto sm:mt-10'>
                <div>
                    <UserPrimaryDetail user={user} />
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
                </div>
            </UserCard>
            <Navigate href='/'
                className="inline-block px-6 py-2 text-black bg-white rounded-md hover:bg-black hover:text-white border border-black hover:border-600 mt-4"
                label='Back to Dashboard'
            />
        </div>

    )
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            suite: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            zipcode: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

export default UserDetails

