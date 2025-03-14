import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import { navigationLinks } from "@/constants/constants";
import SignHeader from "../auth/SignHeader";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/svg/burger.svg" width={30} height={30} alt="hamburger" className="hover:bg-gray-100" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="hidden">Atlasian</SheetTitle>
        <div className="flex flex-col h-screen space-y-5 pb-10 w-full overflow-y-auto">
          <nav className="w-full flex flex-col space-y-2 font-semibold flex-1">
            {navigationLinks.map((link) => (
              <Link  
                key={link.route}
                href={link.route}
                className="relative flex gap-2 justify-center items-center w-full rounded-md hover:bg-gray-100 p-2"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          
          <div>
            <SignHeader />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;