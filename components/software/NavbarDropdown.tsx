import Link from "next/link";

const NavbarDropdown = ({ title, links }: NavbarDropdownProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xs font-extrabold uppercase">{title}</h4>
    
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.title}>
            <Link 
              href={link.route}
              className="hover:text-blue-500"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarDropdown;