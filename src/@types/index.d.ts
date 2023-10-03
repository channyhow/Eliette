export interface Education {
  id: any;
  startYear: number;
  endYear: number;
  school: string;
  degree: string;
  location: string;
  skills: string[];
}

export interface Experience {
  startYear: number;
  endYear: number;
  company: string;
  position: string;
  location: string;
  description : string;
  website: string;
  skills: string[];
  id:string
}
