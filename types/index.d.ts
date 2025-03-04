declare type DropdownLink = {
  title: string;
  route: string;
};

declare type SuggestedQuery = {
  query: string;
  route: string;
};

declare type Possibility = {
  icon: string;
  title: string;
};

declare interface AccordeonItemProps {
  title: string;
  isOpen: boolean;
  description: string;
  imageUrl: string;
  onClick: () => void;
};

declare interface FeatureCard {
  title: string;
  subtitle: string;
  btnTitle: string;
  imageUrl?: string;
};

declare interface FooterLink {
  title: string;
  route: string;
  className?: string;
};

declare interface IntegrationCardProps {
  imageUrl: string;
  width: number;
  height: number;
  imageAlt: string;
};

declare interface NavbarDropdownProps {
  title: string;
  links: DropdownLink[];
};

interface NewFeatureCard {
  imageUrl: string;
  title: string; 
  subtitle: string;
};

declare interface SponsorBrandCardProps {
  imageUrl: string;
  width: number;
  height: number;
  imageAlt: string;
};

declare interface WorkManagementCard {
  title: string;
  subtitle: string;
  imageUrl: string;
};

declare interface WorkManagementModalProps {
  title: string;
  subtitle: string;
  description: string;
  posibilities: Possibility[];
  imageMainUrl: string;
};

// WORKFLOW

declare type ItemAditional = {
  icon: string;
  title: string;
}

declare interface SidebarAditionProps {
  item: ItemAditional;
  className?: string;
}

declare type SidebarDropdownItem = {
  mainTitle: string;
  itemIcon: string;
  itemRef: string;
  itemTitle: string;
  submenu?: boolean
}

declare interface SidebarDropdownProps {
  item: SidebarDropdownItem;
}

declare type SidebarSubmenuItem = {
  icon: string;
  title: string;
}

declare interface SidebarSubmenuProps {
  item: SidebarSubmenuItem, 
  index: number, 
  isOpen: boolean;
  submenuIndex: number,
  sidebarWidth: number,
  // setSubmenuIndex: React.Dispatch<React.SetStateAction<number>>
  setClickedOutside: (value: boolean) => void,
  setSubmenuIndex: (index: number) => void
  // onClick: () => void;
}

declare type SidebarSubmenuIndexItem = {
  title: string;
}

declare interface SidebarSubmenuIndexProps {
  item: SidebarSubmenuIndexItem, 
  submenuIndex: number, 
  sidebarWidth: number, 
  setSubmenuIndex: (index: number) => void
}

declare type SubnavLink = {
  icon: string,
  title: string,
  route: string
}

declare type Link = {
  title: string,
  ref: string,
  icon: string,
  subnav: SubnavLink[]
}

declare interface SidebarWindowProps {
  link: Link,
  isOpen: boolean,
  onClick: () => void
}

// declare type SidebarExtraSubmenu = {
//   icon: string,
//   title: string,
//   route: string,
//   time: string,
// }


// declare type Starred = {
//   icon: string;
//   title: string;
//   route: string;
//   time: string;
// }

declare type SidbarSubmenu = {
  icon: string,
  title: string,
  route: string,
  time: string,
}

declare type SidebarExtraSubmenuType = {
  represent: {
    title: string,
    icon: string,
  },
  submenu: SidbarSubmenu[],
  empty: {
    icon: string,
    title: string,
    description: string
  }
}

declare type SidebarExtraType = {
  icon: string, 
  title: string
}

declare interface SidebarExtraProps {
  item: SidebarExtraType;
  index: number;
  onClick: (index: number) => void;
}

declare interface SidebarExtraSubmenuProps {
  item: SidebarExtraSubmenuType;
  sidebarWidth: number, setSubmenuIndex: (index: number) => void;
  setClickedOutside: React.Dispatch<React.SetStateAction<boolean>>;
}