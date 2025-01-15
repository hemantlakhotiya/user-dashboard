
/**
 * A component that renders a message when no user is found.
 *
 * @return {ReactElement} The component element.
 */
const NoUserFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">No User Found</h2>
        <p className="text-gray-500 mt-2">We couldn't find any users</p>
      </div>
    </div>
  );
};

export default NoUserFound;
