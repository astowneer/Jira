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