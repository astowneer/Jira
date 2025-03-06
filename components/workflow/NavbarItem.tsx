import Image from 'next/image'
import React from 'react'

type NavbarItem = {
  icon: string;
  title: string;
}

const NavbarItem = ({ item }: { item: NavbarItem }) => {
  return (
    <div className="hover:bg-gray-200/70 px-3 py-3 duration-300">
      <Image src={item.icon} width={20} height={20} alt={item.title} />
    </div>
  );
};

export default NavbarItem;