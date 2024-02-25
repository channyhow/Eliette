export interface EducationProps {
  id: string;
  startYear: string;
  endYear: string;
  school: string;
  degree: string;
  description?: string;
  url?: string;
  location?: string;
  image?:string;
  skills?: string[];
}

export interface ExperienceProps {
  id: string;
  startYear: string;
  endYear: string;
  company: string;
  position: string;
  description?: string;
  url?: string;
  location?: string;
  image?:string;
  skills?: string[];
}


export interface CommonCardData {
  id: string;
  primaryText: string; // previously 'title'
  secondaryText?: string; // previously 'subtitle' and optional
  description?: string;
  url?: string;
  location?: string;
  image?: string;
  skills?: string[];
}

// Assuming PortfolioItem is similar to this:
export interface PortfolioItem {
  id: string;
  year: string;
  name: string;
  description?: string;
  url?: string;
  image?: string;
  skills?: string[];
}

export interface SocialItem {
  icon: JSX.Element;
  href: string;
  label: string;
}

export type ConvertedData = CommonCardData;

export interface CardProps {
  // data: data[]
  data: ConvertedData[];
}
