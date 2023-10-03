// import React, {
//   createContext, useState, useEffect, ReactNode,
// } from 'react';

// // Define the context
// export const AppContext = createContext<{ scrolled: boolean } | undefined>(undefined);

// // Create the AppProvider component
// export function AppProvider({ children }: { children: ReactNode }) {
//   const [scrolled, setScrolled] = useState(false);

//   // Function to handle the scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   // Add a scroll event listener when the component mounts
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return <AppContext.Provider value={{ scrolled }}>{children}</AppContext.Provider>;
// }
