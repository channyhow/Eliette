// Base interface for shared properties
interface BaseProps {
  id: string;
  startYear: string;
  endYear: string;
  primaryText: string; // For school or company
  secondaryText: string; // For degree or position
  description?: string;
  url?: string;
  location?: string;
  image: {
    src: string;
    alt: string;
  };
  skills?: string[];
}

// Specific interfaces extending the base one
export interface EducationProps extends BaseProps {
  primaryText: string; // Represents 'school'
  secondaryText: string; // Represents 'degree'
}

export interface ExperienceProps extends BaseProps {
  primaryText: string; // Represents 'company'
  secondaryText: string; // Represents 'position'
}

// Assuming PortfolioItem needs to adhere to a similar structure but might have unique properties
export interface PortfolioItem {
  id: string;
  year: string;
  name: string;
  description: string;
  url: string;
  location?: string; // Added as optional if you have items without location
  image: ImageMapProps[];
  skills: string[];
  // category: string;
}

export interface SocialItem {
  icon: JSX.Element;
  href: string;
  label: string;
}

// Since CommonCardData aims to unify the data structure,
// ensure it's flexible or extendable as needed
export type CommonCardData = BaseProps;

export interface CardProps {
  data: PortfolioItem[]
}

export interface ImageListProps {
  data: ImageProps[]
}

export interface ImageProps {
  src: string;
  alt: string;
  author?: string;
  rows?:number;
  cols?:number;
}
