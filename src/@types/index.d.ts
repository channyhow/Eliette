export interface Education {
  id: string;
  startYear: string;
  endYear: string;
  school: string;
  degree: string;
  location: string;
  skills: string[];
}

export interface Experience {
  startYear: string;
  endYear: string;
  company: string;
  position: string;
  location: string;
  description : string;
  website: string;
  skills: string[];
  id:string
}
