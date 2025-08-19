"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCredit } from "../(context)/UpdateCreditContext";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCredit, setUpdateCredit]=useState<any>()

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
        <UpdateCredit.Provider value={{updateCredit, setUpdateCredit}}>
        <div className="bg-slate-100 h-screen">
          <div className="md:w-64 hidden md:block fixed">
            <SideNav />
          </div>

          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
        </UpdateCredit.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default Layout;


// "use client";
// import React, { useState } from "react";
// import SideNav from "./_components/SideNav";
// import Header from "./_components/Header";
// import { TotalUsageContext } from "../(context)/TotalUsageContext";
// import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";

// const layout = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   const [totalUsage, setTotalUsage] = useState<Number>(0);
//   const [userSubscription, setUserSubscription] = useState<boolean>(false);

//   return (
//     <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
//       {/* @ts-ignore */}
//       <UserSubscriptionContext.Provider
//         value={{ userSubscription, setUserSubscription }}
//       >
//         <div className="bg-slate-100 h-screen">
//           <div className="md:w-64 hidden md:block fixed">
//             <SideNav />
//           </div>

//           <div className="md:ml-64">
//             <Header />
//             {children}
//           </div>
//         </div>
//         {/* @ts-ignore */}
//       </UserSubscriptionContext.Provider>
//     </TotalUsageContext.Provider>
//   );
// };

// export default layout;
