import React from 'react';

/**
 * A full-screen loader component that renders a spinning blue circle.
 *
 * The component overlays the entire page with a gray background and a blue
 * spinning circle in the center. This is used to indicate that data is being
 * loaded from the server.
 *
 * @return {ReactElement} The loader component element.
 */
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
