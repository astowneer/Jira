"use client";

import Image from "next/image";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { navigationLinks } from "@/constants/constants";
import { Fragment, useState } from "react";
import NavbarDropdownLink from "./NavbarDropdown";
import Link from "next/link";
import Search from "./Search";
import SignIn from "./SignIn";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [searchSelected, setSearchSelected] = useState(false);
  const [hoveredNavLink, setHoveredNavLink] = useState(false);

  return (
    <header className="sticky w-full top-0 z-50 shadow-sm">
      <div className="bg-white w-full h-full flex justify-center ">
        <Link href="/" className="h-full w-fit bg-blue-500 hidden xl:flex justify-center items-center absolute left-0 top-0">
          <Image 
            src="/svg/atlassian.svg"
            width={3840}
            height={2160}
            alt="atlasian logo"
            className="py-2 px-6 max-h-[40px] w-auto brightness-[8] invert-0"
          />
        </Link>

        <nav className="flex max-w-5xl bg-white items-center justify-between px-2 gap-20 w-full h-[68px]">
          <Link href="/" className="w-[63px] h-auto flex flex-shrink-0">
            <Image 
              src="/images/jira.png"
              width={1200}
              height={814}
              alt="jira logo"
            />
          </Link>

          {searchSelected ? (
            <Search setSearchSelected={setSearchSelected} />
          ): (
            <>
              <ul className="hidden lg:flex self-end h-full gap-8 text-base">
                {navigationLinks.map((link) => (
                  <Fragment key={link.title}>
                    {hoveredNavLink && (
                      <div className="fixed left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-40 -z-20" />
                    )}
                    {link.dropdown ? (
                      <li 
                        className="relative peer"
                        onMouseEnter={() => setHoveredNavLink(true)}
                        onMouseLeave={() => setHoveredNavLink(false)}
                      >
                        <Link 
                          href={link.route}
                          className="hover:text-blue-500 h-full flex justify-center pb-3 items-end group"
                        >
                          {link.title}
                          <ChevronDownIcon 
                            width={20} 
                            height={20} 
                            className="transition-transform duration-300 group-hover:rotate-180"
                          />
                        </Link>

                        {hoveredNavLink && (
                          <>
                            <div className="absolute min-w-max p-10 -translate-x-1/2 bg-white border-[1px] border-gray-100 z-50 rounded-2xl shadow-lg grid grid-cols-3 gap-10"> 
                              {link.dropdown.map((link) => (
                                <NavbarDropdownLink 
                                  key={link.title} 
                                  title={link.title} 
                                  links={link.links} 
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ): (
                      <li className="h-full flex">
                        <Link 
                          href={link.route}
                          className="hover:text-blue-500 h-full flex justify-center items-end pb-3"
                        >
                          {link.title}
                        </Link>
                      </li>
                    )
                  }
                  </Fragment>
                ))}
              </ul>
              

              <div className="flex items-center gap-5">
                <Link href="https://www.atlassian.com/try/cloud/signup?bundle=jira-software&edition=free" className="bg-blue-500 hover:bg-blue-700 px-5 py-2 rounded-3xl text-white font-bold">
                  Get it free
                </Link>

                <div className="flex items-center">
                  <div className="flex items-center">
                    <MagnifyingGlassIcon 
                      width={24} 
                      height={24} 
                      className="hover:text-blue-500"
                      onClick={() => setSearchSelected((prev) => !prev)}
                    />
                    <span className="border-l-[1px] border-gray-400 h-5 mx-5" />
                  </div>

                  <SignIn />
                </div>
                
                <div className="block lg:hidden">
                  <MobileNav />
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;