"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  ArrowRight,
  Book,
  MessageCircle,
  Settings,
  Unlock,
} from "lucide-react";

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  const handleBill = () => {
    router.push("/dashboard/billing");
  };

  const handleSignin = () => {
    router.push("/sign-in");
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <nav className="flex justify-between items-center px-6 py-4 m-0 max-w-7xl mx-auto bg-gray-200 ">
          <div className="flex w-72">
            <img src="/logo.svg" alt="Logo" />
          </div>

          <SignedIn>
            <button
              onClick={handleBill}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Membership - Join Now
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
          </SignedIn>

          <SignedOut>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={handleSignin}
            >
              Sign-Up / Sign-In
            </button>
          </SignedOut>
        </nav>

        <main className="max-w-7xl mx-auto px-6 pt-8 pb-0">
          <div className="text-center ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">AI Content </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Revolutionize your content creation with our AI-powered app,
              delivering engaging and high-quality text in seconds.
            </p>

            <div>
              <SignedIn>
                <button
                  onClick={handleClick}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-7 py-2.5 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-5 "
                >
                  Get started
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </SignedIn>

              <SignedOut>
                <button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-7 py-2.5 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-5 "
                  onClick={handleSignin}
                >
                  Get started
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </SignedOut>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Feature 1 */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Book className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                25+ Templates
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Responsive, and mobile-first project on the web
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Settings className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Customizable
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Components are easily customized and extendable
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Unlock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Free to Use
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every component and plugin is well documented
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div className="text-center my-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators who trust our AI-powered platform
            </p>

            <SignedIn>
              <button
                onClick={handleClick}
                className="bg-white text-gray-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Creating Now
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </SignedIn>

            <SignedOut>
              <button
                className="bg-white text-gray-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleSignin}
              >
                Start Creating Now
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </SignedOut>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;

// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import BlurText from "./dashboard/blur/BlurText";
// import { SignedIn, SignedOut } from "@clerk/nextjs";
// import { ArrowRight, Book, MessageCircle, Settings, Unlock } from "lucide-react";

// const Page = () => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/dashboard"); // Relative path is better
//   };

//   const handleBill = () => {
//     router.push("/dashboard/billing"); // Relative path is better
//   };

//   const handleSignin=()=>{
//     router.push("/sign-in")
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* <SignedIn>
//         <div>You are signed in</div>
//       </SignedIn>
//       <SignedOut>
//         <div>You are signed out</div>
//       </SignedOut>
//       <button className="gap-5 bg-purple-400 hover:bg-purple-600" onClick={handleSignin}>Sign-Up/Sign-In</button>
//       <button onClick={handleClick}>Go to Dashboard</button> */}

//       {/* <main>
//         <BlurText text="Welcome to AI-Content-Generator!" />
//       </main> */}

//       {/* <SignedIn>
//         <div>
//           <p>You are signed in</p>
//           <button
//             className="gap-5 bg-green-400 hover:bg-green-600 px-4 py-2 rounded text-white"
//             onClick={handleClick}
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       </SignedIn> */}

//       {/* <SignedOut>
//         <div>
//           <p>You are signed out</p>
//           <button
//             className="gap-5 bg-purple-400 hover:bg-purple-600 px-4 py-2 rounded text-white"
//             onClick={handleSignin}
//           >
//             Sign-Up / Sign-In
//           </button>
//         </div>
//       </SignedOut> */}

//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       {/* Navigation */}
//       <nav className="flex justify-between items-center px-6 py-4 m-0 max-w-7xl mx-auto bg-gray-200 rounded-md">
//         <div className="flex w-72">
//           <img src="/logo.svg" alt="Logo"/>
//         </div>
//         <button onClick={handleBill} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
//           Membership - Join Now
//           <ArrowRight className="inline ml-2 w-4 h-4" />
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <main className="max-w-7xl mx-auto px-6 py-20">
//         <div className="text-center">
//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
//             <span className="text-gray-900">AI Content </span>
//             <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//               Generator
//             </span>
//           </h1>

//           {/* Subtitle */}
//           {/* <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
//             Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
//           </p> */}
//           <div className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
//             <BlurText text="Revolutionize your content creation with our AI-powered application"  />
//           <BlurText text="Delivering engaging and high-quality text in seconds!" />

//           </div>

//           {/* CTA Button */}
//           <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-7 py-2.5 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-20">
//             Get started
//             <ArrowRight className="inline ml-3 w-5 h-5" />
//           </button>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
//           {/* Feature 1 */}
//           <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//               <Book className="text-white w-8 h-8" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">25+ Templates</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Responsive, and mobile-first project on the web
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//               <Settings className="text-white w-8 h-8" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Customizable</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Components are easily customized and extendable
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//               <Unlock className="text-white w-8 h-8" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Free to Use</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Every component and plugin is well documented
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50">
//             <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
//               <MessageCircle className="text-white w-8 h-8" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Contact us 24 hours a day, 7 days a week
//             </p>
//           </div>
//         </div>

//         {/* Additional CTA Section */}
//         <div className="text-center mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
//           <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Join thousands of creators who trust our AI-powered platform
//           </p>
//           <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
//             Start Creating Now
//             <ArrowRight className="inline ml-2 w-4 h-4" />
//           </button>
//         </div>
//       </main>
//     </div>

//     </div>
//   );
// };

// export default Page;
