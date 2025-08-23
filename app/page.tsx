"use client";
import style from "./page.module.css";

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

  const handleSetting = () => {
    router.push("/dashboard/setting");
  };

  const handleSignin = () => {
    router.push("/sign-in");
  };

  return (
    <div className={`${style.navbar}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <nav className="w-full bg-gray-200 px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className={`${style.parentDiv} flex w-72`}>
              <img src="/logo.svg" alt="Logo" />
            </div>

            <SignedIn>
              <button
                onClick={handleBill}
                className={` ${style.myDiv} bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 `}
              >
                Membership - Join Now
                <ArrowRight className={` ${style.clss} inline ml-1 w-4 h-4`} />
              </button>
            </SignedIn>

            <SignedOut>
              <button
                className={` ${style.myDiv} bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 `}
                onClick={handleSignin}
              >
                Sign-Up / Sign-In
              </button>
            </SignedOut>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 pt-5 pb-0">
          <div className={`${style.cls1} text-center `}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">AI Content </span>
              <span className=" bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Revolutionize your content creation with our AI-powered app,
              delivering engaging and high-quality text in seconds.
            </p>

            <div className={`${style.cls2} `}>
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
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-900" onClick={handleClick}>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Book className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                20+ Templates
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Responsive, and mobile-first project on the web
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-900" onClick={handleSetting}>
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
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-red-900" onClick={handleBill}>
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
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200/50 border-red-900">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contact us through salmanmd8921@gmail.com
              </p>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div
            className={` ${style.cls3} text-center my-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white`}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators who trust our AI-powered platform
            </p>

            <SignedIn>
              <button
                onClick={handleClick}
                className=" bg-white text-gray-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Creating Now
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </SignedIn>

            <SignedOut>
              <button
                className=" bg-white text-gray-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
