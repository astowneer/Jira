"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/currentUser";
import Link from "next/link";
import LogOutButton from "../auth/LogOutButton";
import { logOut } from "@/lib/actions";
import useOutsideClick from "@/hooks/useOutsideClick";

const SignIn = () => {
  const [loading, setLoading] = useState(true);
  const [fullUser, setFullUser] = useState(null);
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

  return (
    <>
      {fullUser == null ? (
        <Link 
          href="/sign-in"
          className="text-blue-700 text-sm hover:bg-gray-200 px-3 py-2"
        >
          Sign in
        </Link>
      ) : (
        <div className="relative select-none" ref={dropdownRef}>
          <p className="font-bold text-blue-500 hover:text-blue-600 cursor-pointer" onClick={() => setShowProfile((prev) => !prev)}>{fullUser.firstName}</p>
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
        </div>
      )}
    </>
  );
};

export default SignIn;
