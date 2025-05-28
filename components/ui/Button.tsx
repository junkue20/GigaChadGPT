// // import { useState, useEffect } from 'react';

// // Button 컴포넌트
// export function Button({
//   onClick,
//   children,
//   size = 'md',
//   variant = 'default',
// }: {
//   onClick: () => void;
//   children: React.ReactNode;
//   size?: 'sm' | 'md' | 'lg';
//   variant?: 'default' | 'outline' | 'ghost';
// }) {
//   const sizeClass =
//     size === 'sm' ? 'px-2 py-1 text-sm' : size === 'lg' ? 'px-4 py-2 text-lg' : 'px-3 py-1.5';
//   const variantClass =
//     variant === 'outline'
//       ? 'border border-gray-400 text-gray-800'
//       : variant === 'ghost'
//         ? 'text-gray-800 hover:bg-gray-100'
//         : 'bg-blue-500 text-white';

//   return (
//     <button
//       onClick={onClick}
//       className={`rounded ${sizeClass} ${variantClass} transition-colors duration-150`}
//     >
//       {children}
//     </button>
//   );
// }
