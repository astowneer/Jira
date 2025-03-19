"use client"

import Image from "next/image"
import Link from "next/link"
import Search from "./Search"
import UserProfile from "./UserProfile"
import useOutsideClick from "@/hooks/useOutsideClick"
import UserContextMenu from "./UserContextMenu"
import { Plus } from "lucide-react"
import { useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/currentUser"
import { useSidebar } from "./sidebar/SidebarContext"
import Notifications from "./Notifications"

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullUser, setFullUser] = useState<User | null>(null);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const notificationRef = useOutsideClick<HTMLDivElement>(() => {
    setNotificationOpen(false)
  })

  const { toggleSidebar, toggleIssuesForm } = useSidebar();

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

  if (loading) return <div>Loading...</div>;

  return (
    <header className="flex justify-between gap-3 max-md:gap-1 px-5 border-b-2 bg-white ">
      <section className="flex gap-3 max-md:gap-1 items-center">
        <button className="hover:bg-gray-200/70 px-3 py-3 duration-300 cursor-pointer max-lg:hidden" onClick={toggleSidebar}>
          <Image src="/svg/burger.svg" width={18} height={18} alt="burger" />
        </button>
      
        <Link href="/" className="w-[63px] h-auto flex flex-shrink-0">
          <Image src="/images/jira.png" width={1200} height={814} alt="jira logo" />
        </Link>
      </section>
      
      <section className="flex items-center justify-center flex-1 max-sm:hidden">
        <div className="max-w-[615px] w-full h-full flex gap-2 items-center py-2">
          <Search />

          <button className="bg-blue-600 h-full text-white px-3 py-1 flex items-center justify-center gap-1 rounded-xs" onClick={toggleIssuesForm}>
            <Plus width={20} height={20} className="text-white font-bold" />
            <span>Create</span>
          </button>
        </div>
      </section>

      <section className="flex items-center gap-3 max-md:gap-1 flex-shrink-0">
        <div className="relative select-none">
          <div ref={notificationRef} className="hover:bg-gray-200/70 px-3 py-3 duration-300 cursor-pointer" onClick={() => setNotificationOpen((prev) => !prev)}>
            <Image src="/svg/bell.svg" width={20} height={20} alt="notification" />
          </div>

          {notificationOpen && <Notifications />}
        </div>

        <Link href="https://confluence.atlassian.com/pages/viewrecentblogposts.action?key=Cloud" className="hover:bg-gray-200/70 px-3 py-3 duration-300 cursor-pointer">
          <Image src="/svg/help.svg" width={20} height={20} alt="notification" />
        </Link>

        <Link href="https://asr-miniproj-team7.atlassian.net/jira/settings/personal/general" className="hover:bg-gray-200/70 px-3 py-3 duration-300 cursor-pointer">
          <Image src="/svg/settings.svg" width={20} height={20} alt="notification" />
        </Link>

        <div ref={fullUser ? dropdownRef : undefined} className="relative select-none">
          <UserProfile setShowProfile={setShowProfile} />
          {fullUser && showProfile && <UserContextMenu fullUser={fullUser} />}
        </div>
      </section>
    </header>
  );
};

export default Navbar;