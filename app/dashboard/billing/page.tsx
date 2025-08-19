"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { UserSubscription } from "@/utils/schema";
import moment from "moment";
import { db } from "@/utils/db";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const BillingPage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const handlePayment = async () => {
    setLoading(true);

    const scriptLoaded = await loadRazorpay();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("/api/create-subscription", {});
      console.log("Subscription Created:", res.data);
      onPayment(res.data.id);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const onPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "AI Content Generator",
      description: "Upgrade to Pro Plan",
      image: "/smd.jpg",
      handler: async function (response: any) {
        console.log("Razorpay Response:", response);
        await axios.post("/api/save-subscription", {
          email: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          ...response,
        });
        if (response) {
          saveSubscription(response?.razorpay_payment_id);
        }
        alert("✅ Payment Successful!");
        setLoading(false);
      },
      prefill: {
        name: user?.fullName || "John Doe",
        email: user?.primaryEmailAddress?.emailAddress || "test@gmail.com",
      },
      theme: { color: "#7c3aed" },
      modal: {
        ondismiss: function () {
          alert("❌ Payment Cancelled");
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    rzp.on("payment.failed", function (response: any) {
      console.error("Payment Failed:", response.error);
      alert("❌ Payment Failed! Please try again.");
      setLoading(false);
    });
  };

  const saveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Free Plan Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-2 border-green-500 transition">
          <h2 className="text-2xl font-bold text-gray-800">Free Plan</h2>
          <p className="text-gray-500 mt-2">₹0/month</p>
          <p className="text-gray-500 mt-2">Best for beginners</p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ 10,000 Words/Month</li>
            <li>✅ Access to 50+ Templates</li>
            <li>✅ Unlimited Copy & Download</li>
            <li>✅ 1 Month of History</li>
          </ul>
          <div className="mt-6">
            <button
              className="w-full py-3 bg-green-500 text-white hover:bg-green-600 rounded-lg font-semibold cursor-pointer"
              onClick={() => router.push("/dashboard")}
            >
              Current Plan
            </button>
          </div>
        </div>

        {/* Paid Plan Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-2 border-purple-500 transition">
          <h2 className="text-2xl font-bold text-purple-700">Pro Plan</h2>
          <p className="text-gray-500 mt-2">
            For advanced users & unlimited access
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>🚀 Unlimited AI generations</li>
            <li>🚀 Access to premium templates</li>
            <li>🚀 Priority support</li>
          </ul>
          <div className="mt-6 text-center">
            <p className="text-3xl font-bold text-purple-700">
              ₹100 <span className="text-lg text-gray-500">/month</span>
            </p>
          </div>
          <div className="mt-6">
            <button
              disabled={loading || userSubscription}
              onClick={handlePayment}
              className="w-full flex items-center justify-center gap-2 py-3 cursor-pointer bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {userSubscription ? "Your plan is Active" : "Upgrade Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;










// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { Loader2Icon } from "lucide-react";
// import { useUser } from "@clerk/nextjs";
// import { UserSubscription } from "@/utils/schema";
// import { db } from "@/utils/db";
// import moment from "moment";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const BillingPage = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const user = useUser();

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("/api/create-subscription", {});
//       console.log("Subscription Created:", res.data);
//       onPayment(res.data.id);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   const onPayment = (subId: string) => {
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       subscription_id: subId,
//       name: "AI Content Generator",
//       description: "Upgrade to Pro Plan",
//       image: "/smd.jpg",
//       handler: async function (response: any) {
//         console.log("Razorpay Response:", response);
//         await axios.post("/api/verify-payment", response);
//         alert("✅ Payment Successful!");
//         setLoading(false);
//       },
//       prefill: {
//         name: "John Doe",
//         email: "johndoe@gmail.com",
//         contact: "9876543210",
//       },
//       theme: {
//         color: "#7c3aed",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-6">
//       <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
//         {/* Free Plan Section */}
//         <div className="bg-white shadow-lg rounded-xl p-8 border-2 border-green-500 transition">
//           <h2 className="text-2xl font-bold text-gray-800">Free Plan</h2>
//           <p className="text-gray-500 mt-2">₹0/month</p>
//           <p className="text-gray-500 mt-2">Best for beginners</p>
//           <ul className="mt-4 space-y-2 text-gray-700">
//             <li>✅ 10,000 Words/Month</li>
//             <li>✅ Access to 50+ Templates</li>
//             <li>✅ Unlimited Copy & Download</li>
//             <li>✅ 1 Month of History</li>
//           </ul>
//           <div className="mt-6">
//             <button
//               className="w-full py-3 bg-green-500 text-white hover:bg-green-600 rounded-lg font-semibold cursor-pointer"
//               onClick={() => router.push("/dashboard")}
//             >
//               Current Plan
//             </button>
//           </div>
//         </div>

//         {/* Paid Plan Section */}
//         <div className="bg-white shadow-lg rounded-xl p-8 border-2 border-purple-500 transition">
//           <h2 className="text-2xl font-bold text-purple-700">Pro Plan</h2>
//           <p className="text-gray-500 mt-2">
//             For advanced users & unlimited access
//           </p>
//           <ul className="mt-4 space-y-2 text-gray-700">
//             <li>🚀 Unlimited AI generations</li>
//             <li>🚀 Access to premium templates</li>
//             <li>🚀 Priority support</li>
//           </ul>
//           <div className="mt-6 text-center">
//             <p className="text-3xl font-bold text-purple-700">
//               ₹100 <span className="text-lg text-gray-500">/month</span>
//             </p>
//           </div>
//           <div className="mt-6">
//             <button
//               disabled={loading}
//               onClick={handlePayment}
//               className="w-full flex items-center justify-center gap-2 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
//             >
//               {loading && <Loader2Icon className="animate-spin" />}
//               Upgrade Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillingPage;
