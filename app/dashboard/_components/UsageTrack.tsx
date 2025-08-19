"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect } from "react";
import { HISTORY } from "../history/page";
import { usePathname } from "next/navigation";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCredit } from "@/app/(context)/UpdateCreditContext";

const UsageTrack = () => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const totalCredits = userSubscription ? 100000 : 10000;
  const pathname = usePathname();
  const {updateCredit, setUpdateCredit}=useContext(UpdateCredit);

  useEffect(() => {
    if (user) {
      user&&getData();
      user&&checkUserSubscription();
    }
  }, [user, pathname]);

  useEffect(() => {
    user&&getData();
  }, [updateCredit&&user])
  


  // ✅ Get AI usage data
  const getData = async () => {
    // @ts-ignore
    const result: HISTORY[] = await db
      .select()
      .from(AIOutput)
    // @ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

    let total = 0;
    result.forEach((ele) => {
      total += ele.aiResponse?.trim().split(/\s+/).length || 0;
    });
    setTotalUsage(total);
  };

  // ✅ Check if user is subscribed
  const checkUserSubscription = async () => {
    const result = await db
      .select()
      .from(UserSubscription)
    // @ts-ignore
      .where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));

    setUserSubscription(result.length > 0);
  };

  return (
    <div className="m-5">
      <div className="bg-purple-600 text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#c181f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${Math.min((totalUsage / totalCredits) * 100, 100)}%` }}
          ></div>
        </div>
        <h2 className="my-2 text-sm">
          {totalUsage}/{totalCredits} credit used
        </h2>
      </div>

      {!userSubscription && (
        <Button className="w-full my-3 text-blue-900 bg-gray-200 hover:bg-green-600 hover:text-white">
          Upgrade
        </Button>
      )}
    </div>
  );
};

export default UsageTrack;




// "use client";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput, UserSubscription } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import { eq } from "drizzle-orm";
// import React, { useContext, useEffect, useState } from "react";
// import { HISTORY } from "../history/page";
// import { usePathname } from "next/navigation";
// import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";


// const UsageTrack = () => {
//   const { user } = useUser();

//   const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
//   // @ts-ignore
//   const {userSubscription, setUserSubscription} = useContext(UserSubscriptionContext)
//   const totalCredits = 10000; 
//   const pathname = usePathname();

//   useEffect(() => {
//     if (user) getData();
//     if(user) isUserSubscribe();
//   }, [user, pathname]);

//   const getData = async () => {
//     // @ts-ignore
//     const result: HISTORY[] = await db
//       .select()
//       .from(AIOutput)
//       // @ts-ignore
//       .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

//     getTotalUsage(result);
//   };

//   const isUserSubscribe =async ()=>{
//     const result =await db.select().from(UserSubscription).where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress))
//     if(result){
//       setUserSubscription(true);
//     }
//   }
//   const getTotalUsage = (result: HISTORY[]) => {
//     let total: number = 0;

//     // Count words instead of characters
//     result.forEach((ele) => {
//       total += ele.aiResponse?.trim().split(/\s+/).length || 0;
//     });

//     setTotalUsage(total);
//   };

//   return (
//     <div className="m-5">
//       <div className="bg-purple-600 text-white p-3 rounded-lg">
//         <h2 className="font-medium">Credits</h2>
//         <div className="h-2 bg-[#c181f9] w-full rounded-full mt-3">
//           <div
//             className="h-2 bg-white rounded-full"
//             style={{
//               width: `${Math.min((totalUsage / totalCredits) * 100, 100)}%`,
//             }}
//           ></div>
//         </div>
//         <h2 className="my-2 text-sm">
//           {totalUsage}/{userSubscription? 100000: totalCredits} words used
//         </h2>
//       </div>
//       <Button className="w-full my-3 text-blue-900 bg-gray-200 hover:bg-green-600 hover:text-white">
//         Upgrade
//       </Button>
//     </div>
//   );
// };

// export default UsageTrack;




// "use client";
// import { Button } from "@/components/ui/button";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import { eq } from "drizzle-orm";
// import React, { useEffect } from "react";
// import { HISTORY } from "../history/page";

// const UsageTrack = () => {
//   const { user } = useUser();

//    useEffect(() => {
//     user && getData();
//   }, [user]);

//   const getData = async () => {
//     const result:HISTORY[] =await db
//       .select()
//       .from(AIOutput)
//       .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
//       getTotalUsage(result)
//   };

//   const getTotalUsage = (result:HISTORY[]) => {
//     let total: number = 0;
//     result.forEach((ele) => {
//       total = total + Number(ele.aiResponse?.length);
//     });
//   };

//   return (
//     <div className="m-5">
//       <div className="bg-purple-600 text-white p-3 rounded-lg">
//         <h2 className="font-medium">Credits</h2>
//         <div className="h-2 bg-[#c181f9] w-full rounded-full mt-3">
//           <div
//             className="h-2 bg-white rounded-full"
//             style={{ width: "3.5%" }}
//           ></div>
//         </div>
//         <h2 className="my-2 text-sm">350/10,000 credit used</h2>
//       </div>
//       <Button className="w-full my-3 text-blue-900 bg-gray-200 hover:bg-green-600 hover:text-white">
//         Upgrade
//       </Button>
//     </div>
//   );
// };

// export default UsageTrack;
