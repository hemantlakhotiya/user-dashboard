import Link from 'next/link'
import PropTypes from 'prop-types'

/**
 * A utility component that wraps Next.js's Link component to make it easier to create text links.
 * 
 * @param {Object} props
 * @param {string} props.label - The text of the link.
 * @param {...Object} props - Any other props to pass to the Link component.
 * 
 * @return {ReactElement} A Link component with the given label.
 */
const Navigate = ({label, ...props}) => {
  return (
    <Link {...props}> { label } </Link>
  )
}


Navigate.propTypes = {
  label: PropTypes.string.isRequired,
}


export default Navigate
