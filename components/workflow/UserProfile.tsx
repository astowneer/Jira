import Image from 'next/image';
import React from 'react'

const UserProfile = ({ setShowProfile }: { setShowProfile: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="hover:bg-gray-200/70 px-3 py-3 duration-300" onClick={() => setShowProfile((prev) => !prev)}>
      <Image src="/svg/user.svg" width={30} height={30} alt="user" className="bg-gray-300 rounded-full p-1" />
    </div>
  );
};

export default UserProfile;