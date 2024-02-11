// import React, { useState } from "react";

// const DropdownAdmin = ({ options, href }) => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     return (
//         <>
//             <button onClick={toggleDropdown}>Management {options[0]}</button>
//             {dropdownOpen && (
//                 <ul className="pl-4 absolute top-full left-0 bg-white text-blue-800 py-2 w-full rounded-md shadow-lg">
//                     {options.map((option, index) => (
//                         <li key={index} className="capitalize">
//                             <InertiaLink
//                                 href={`${href}${option.toLowerCase()}`}
//                             >
//                                 {option}
//                             </InertiaLink>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </>
//     );
// };

// export default DropdownAdmin;

// import React from "react";

// const DropdownAdmin = ({ options, href, dropdownOpen, toggleDropdown }) => {
//     return (
//         <>
//             <button onClick={toggleDropdown}>Management {options[0]}</button>
//             {dropdownOpen && (
//                 <ul className="pl-4 absolute top-full left-0 bg-white text-blue-800 py-2 w-full rounded-md shadow-lg">
//                     {options.map((option, index) => (
//                         <li key={index} className="capitalize">
//                             <InertiaLink href={`${href}${option}`}>
//                                 {option}
//                             </InertiaLink>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </>
//     );
// };

// export default DropdownAdmin;
