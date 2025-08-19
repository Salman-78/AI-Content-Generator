import { createContext } from "react";
export const TotalUsageContext = createContext<any>(0);



// "use client";
// import { createContext } from "react";

// interface TotalUsageContextType {
//   totalUsage: number;
//   setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
// }

// export const TotalUsageContext = createContext<TotalUsageContextType>({
//   totalUsage: 0,
//   setTotalUsage: () => {},
// });
