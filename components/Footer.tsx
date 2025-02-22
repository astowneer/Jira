import { footerCopyrightLink, footerLinks } from "@/constants/constants";
import { Fragment } from "react";
import FooterLink from "./FooterLink";
import Link from "next/link";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-4 gap-4">
      <section className="bg-gray-100 h-full max-w-5xl w-full px-6 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-sm:gap-14 gap-10 lg:gap-6 rounded-xl">
        {footerLinks.map((link, ind) => (
          <Fragment key={ind}>
            {link.main ? (
              <div className="h-full flex flex-col">
                <div className="h-[58px] block">
                  <div className="w-[20px] h-[20px] bg-blue-600" />
                </div>
                
                <nav className="">
                  <ul className="flex flex-col space-y-4">
                    {link.links.map((link) => (
                      <FooterLink 
                        key={link.title} 
                        title={link.title} 
                        route={link.route} 
                        className="font-bold" 
                      />
                    ))}
                  </ul>
                </nav>
              </div>
            ): (
              <nav className="h-full flex flex-col">
                <div className="h-[58px] block">
                  <div className="uppercase font-bold text-sm max-h-[58px] h-full">
                    {link.title}
                  </div>
                </div>

                <ul className="flex flex-col space-y-4">
                  {link.links.map((link) => (
                    <FooterLink 
                      key={link.title} 
                      title={link.title} 
                      route={link.route} 
                    />
                  ))}
                </ul>
                
                <div className="mt-8 flex items-center w-fit group">
                  <Link 
                    href={link.mainLinkRoute!}
                    className="font-bold text-sm block group-hover:underline "
                  >
                    {link.mainLinkTitle}
                    
                  </Link>
                  <div className="pl-1 group-hover:pl-2 text-sm group-hover:text-xs">→</div>
                </div>
                
              </nav>
            )}
          </Fragment>
        ))}
      </section>

      <section className="max-w-5xl p-6 w-full flex flex-row max-md:flex-col gap-5 justify-between max-md:items-start items-center">
        <p className="text-sm">Copyright &copy; 2025 Atlassian</p>

        <div className="flex gap-5 flex-row max-sm:flex-col max-sm:items-start items-center">
          <ul className="flex gap-5 max-sm:gap-2 flex-row max-sm:flex-col">
            {footerCopyrightLink.map((link) => (
              <FooterLink 
                key={link.title} 
                title={link.title} 
                route={link.route} 
              />
            ))}
          </ul>
          
          <div className="flex items-center gap-1 py-2 w-fit outline-none focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 rounded-md">
            <Globe width={19} height={19} />
            <select 
              name="languages" 
              id="languages"
              className="w-fit text-sm outline-none bg-transparent"
            >
              {["Deutch", "English", "Espanol", "Nederlands"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;