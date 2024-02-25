import {
  ConvertedData, EducationProps, ExperienceProps, PortfolioItem,
} from '../types';

// Adjusting to handle an array of EducationProps and return an array of CommonCardData
export function convertEducationToCommonData(educationArray: EducationProps[]): ConvertedData[] {
  return educationArray.map((education) => ({
    id: education.id,
    primaryText: education.school,
    secondaryText: education.degree,
    description: education.description || '', // Provide a default empty string if undefined
    url: education.url || '', // Provide a default empty string if undefined
    location: education.location || '', // Provide a default empty string if undefined
    image: education.image || '', // Provide a default empty string if undefined
    skills: education.skills || [], // Provide an empty array if undefined
  }));
}

// Adjusting to handle an array of ExperienceProps and return an array of CommonCardData
export function convertExperienceToCommonData(experienceArray: ExperienceProps[]): ConvertedData[] {
  return experienceArray.map((experience) => ({
    id: experience.id,
    primaryText: experience.company,
    secondaryText: experience.position,
    description: experience.description || '', // Provide a default empty string if undefined
    url: experience.url || '', // Provide a default empty string if undefined
    location: experience.location || '', // Provide a default empty string if undefined
    image: experience.image || '', // Provide a default empty string if undefined
    skills: experience.skills || [], // Provide an empty array if undefined
  }));
}

// Convert PortfolioItem array to CommonCardData array
export function convertPortfolioToCommonData(portfolio: PortfolioItem[]): ConvertedData[] {
  return portfolio.map((item) => ({
    id: item.id,
    primaryText: item.name, // 'title' is now 'primaryText'
    secondaryText: item.year
    // `Year: ${item.year}`
    , // 'subtitle' is now 'secondaryText'
    description: item.description,
    url: item.url,
    location: '', // Assuming location is not part of PortfolioItem, set as empty or adjust as needed
    image: item.image,
    skills: item.skills,
  }));
}
