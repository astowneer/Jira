"use client"

import Image from "next/image"
import Link from "next/link"
import Search from "./Search"
import { Plus } from "lucide-react"
import useOutsideClick from "@/hooks/useOutsideClick";
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/currentUser"
import UserProfile from "./UserProfile"
import { useSidebar } from "./SidebarContext"
import UserLogged from "./UserLogged"
import NavbarItem from "./NavbarItem"
import { navbarItems } from "@/constants/constants"

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullUser, setFullUser] = useState<User | null>(null);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setShowProfile(false);
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user: User | null = await getCurrentUser({ withFullUser: true });
      setFullUser(user);
      setLoading(false);
    };

    fetchUser()
  }, []);

  const { toggleSidebar } = useSidebar();

  if (loading) return <div>Loading...</div>;

  return (
    <header className="sticky top-0 flex justify-between h-[63px] px-5 border-b-2 bg-white z-50">
      <section className="flex gap-3 items-center">
        <button className="hover:bg-gray-200/70 px-3 py-3 duration-300" onClick={toggleSidebar}>
          <Image src="/svg/burger.svg" width={18} height={18} alt="burger" />
        </button>

        <button className="hover:bg-gray-200/70 px-3 py-3 duration-300">
          <Image src="/svg/squares.svg" width={20} height={20} alt="your apps" />
        </button>
      
        <Link href="/" className="w-[63px] h-auto flex flex-shrink-0">
          <Image src="/images/jira.png" width={1200} height={814} alt="jira logo" />
        </Link>
      </section>
      
      <section className="flex items-center justify-center flex-1">
        <div className="max-w-[615px] w-full h-full flex gap-2 items-center py-2">
          <Search />

          <button className="bg-blue-600 h-full text-white px-3 py-1 flex items-center justify-center gap-1 rounded-xs">
            <Plus width={20} height={20} className="text-white font-bold" />
            <span>Create</span>
          </button>
        </div>
      </section>

      <section className="flex items-center gap-5">
        {navbarItems.map((item, index) => (
          <NavbarItem key={index} item={item} />
        ))}

        {fullUser != null ? (
          <section className="relative select-none" ref={dropdownRef}>
            <UserProfile setShowProfile={setShowProfile} />
            {showProfile && <UserLogged fullUser={fullUser} />}
          </section>
        ): <UserProfile setShowProfile={setShowProfile} /> }
       
      </section>
    </header>
  );
};

export default Navbar;