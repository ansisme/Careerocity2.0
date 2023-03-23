// import React, { useState, useEffect } from 'react';

// function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleScroll = () => {
//     if (window.pageYOffset > 100) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const handleClick = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>
//       {isVisible &&
//         <button
//           className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
//           onClick={handleClick}
//         >
//           Scroll to Top
//         </button>
//       }
//     </>
//   );
// }

// export default ScrollToTopButton;
