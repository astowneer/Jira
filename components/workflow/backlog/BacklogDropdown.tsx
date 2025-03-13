import React from 'react'

const BacklogDropdown = ({ title, handle }: { title: string, handle: () => void }) => {
  return (
    <button className="w-full p-2 hover:bg-gray-200 text-left" onClick={handle}>
      {title}
    </button>
  );
};

export default BacklogDropdown;