

import classNames from "classnames";
import PropTypes from 'prop-types';

/**
 * A UserCard component that renders a styled container with optional additional classes.
 *
 * @param {Object} props
 * @param {ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} [props.className] - Additional class names to apply to the card.
 *
 * @returns {ReactElement} The styled card component.
 */

const UserCard = ({children, className}) => {
  return (
    <div className={classNames("border border-gray-300 p-4 rounded-lg shadow-sm", className)}>
      {children}
    </div>
  );
};


UserCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default UserCard;

