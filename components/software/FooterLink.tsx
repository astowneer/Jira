import { cn } from "@/lib/utils";
import Link from "next/link";

const FooterLink = ({ title, route, className }: FooterLink) => {
  return (
    <li>
      <Link 
        href={route}
        className={cn("text-sm hover:underline", className)}
      >
        {title}
      </Link>
    </li>
  );
};

export default FooterLink;