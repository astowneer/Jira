"use client"

import Image from "next/image"
import Link from "next/link"
import Search from "./Search"
import { Divide, Plus } from "lucide-react"
import useOutsideClick from "@/hooks/useOutsideClick";
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/currentUser"
import UserProfile from "./UserProfile"
import { useSidebar } from "./SidebarContext"

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullUser, setFullUser] = useState(null);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setShowProfile(false);
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser({ withFullUser: true });
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
        <div className="hover:bg-gray-200/70 px-3 py-3 duration-300">
          <Image src="/svg/bell.svg" width={20} height={20} alt="notification" />
        </div>
        <div className="hover:bg-gray-200/70 px-3 py-3 duration-300">
          <Image src="/svg/help.svg" width={20} height={20} alt="help" />
        </div>
        <div className="hover:bg-gray-200/70 px-3 py-3 duration-300">
           <Image src="/svg/settings.svg"width={20}height={20}alt="settings" />
        </div>
        {/* <div className="hover:bg-gray-200/70 px-3 py-3 duration-300">
          <Image src="/svg/user.svg" width={30} height={30} alt="user" className="bg-gray-300 rounded-full p-1" />
        </div> */}

        {fullUser != null ? (
          <section className="relative select-none" ref={dropdownRef}>
            <UserProfile setShowProfile={setShowProfile} />

            {showProfile && (
              <>
                <div className="absolute bg-white border-[1px] border-gray-200 flex flex-col space-y-3 rounded-lg drop-shadow-lg right-0 top-10 p-5 min-w-[300px]">
                  {fullUser.email ? (
                    <p className="font-bold text-sm">{fullUser.email}</p>
                  ): (
                    <p className="font-bold text-sm">{fullUser.firstName}</p>
                  )}
                  
                  <p className="cursor-pointer hover:text-blue-500 w-fit" onClick={async () => await logOut()}>Log Out</p>
                </div>
              </>
            )}
          </section>
        ): <UserProfile setShowProfile={setShowProfile} /> }
       
      </section>
    </header>
  );
};

export default Navbar;