import Image from 'next/image';
import React from 'react'

const UserProfile = ({ 
  setShowProfile
 }: { 
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>> 
}) => {
  return (
    <section className="hover:bg-gray-200/70 p-3 duration-300" onClick={() => setShowProfile((prev) => !prev)}>
      <Image 
        src="/svg/user-bold.svg" 
        width={30} 
        height={30} 
        alt="user profile" 
        className="bg-gray-300 outline outline-2 outline-gray-300 rounded-full p-1" 
      />
    </section>
  );
};

export default UserProfile;