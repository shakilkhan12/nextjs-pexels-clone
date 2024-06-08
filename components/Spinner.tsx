import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4  border-t-green-500 border-b-green-500 border-r-green-500 border-transparent rounded-full  animate-spin"></div>
    </div>
  );
};

export default Spinner;
