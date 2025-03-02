// 'use client'
// import { useEffect, useState } from 'react';

// interface CurtainLoaderProps {
//     onLoadComplete?: () => void;
// }

// const CurtainLoader: React.FC<CurtainLoaderProps> = ({ onLoadComplete }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isHidden, setIsHidden] = useState(false);

//     useEffect(() => {
//         // Animate the divider line
//         setTimeout(() => {
//             setIsOpen(true);
//         }, 200);
//     }, [onLoadComplete]);

//     if (isHidden) return null;

//     return (
//         <div className="fixed inset-0 z-50">
//             <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-600 to-yellow-400 transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-full' : ''}`}></div>
//             <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-green-600 to-yellow-400 transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-y-full' : ''}`}></div>

//         </div>
//     );
// };

// export default CurtainLoader;