"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/currentUser";
import Link from "next/link";
import useOutsideClick from "@/hooks/useOutsideClick";
import UserContextMenu from "../workflow/UserContextMenu";

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const [fullUser, setFullUser] = useState<User | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setShowProfile(false);
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser({ withFullUser: true });
      setFullUser(user);
      setLoading(false);
    };
    
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!fullUser) return <Link href="/sign-in" className="text-blue-700 text-sm hover:bg-gray-200 px-3 py-2">Sign in</Link>

  return (
    <div ref={dropdownRef} className="relative select-none">
      <p 
        className="font-bold text-blue-500 hover:text-blue-600 cursor-pointer" 
        onClick={() => setShowProfile((prev) => !prev)}
      >
        {fullUser.firstName}
      </p>
      {showProfile && <UserContextMenu fullUser={fullUser} />}
    </div>
  );
};

export default SignIn;
