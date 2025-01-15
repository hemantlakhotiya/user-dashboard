
import '../styles/globals.css'
import PropTypes from 'prop-types';




/**
 * The root component of the Next.js app.
 *
 * @param {object} Component The current page component.
 * @param {object} pageProps The props passed to the page component.
 * @returns {ReactElement} The rendered page.
 */
function MyApp({ Component, pageProps }) { 
  return  <Component {...pageProps} /> 
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp

