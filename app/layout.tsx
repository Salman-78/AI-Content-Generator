// import "./globals.css";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedOut,
//   SignedIn,
//   UserButton,
// } from "@clerk/nextjs";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "AI Content Generator",
//   description: "An AI tool to generate content",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     // <ClerkProvider>
//     //   <html lang="en">
//     //     <body className={inter.className}>{children}</body>
//     //   </html>
//     // </ClerkProvider>

//     <html lang="en">
//       <body>
//         <ClerkProvider>
//           <header>
//             <SignedOut>{/* <SignInButton/> */}</SignedOut>

//             <SignedIn>{/* <UserButton/> */}</SignedIn>
//           </header>
//           <main>{children}</main>
//         </ClerkProvider>
//       </body>
//     </html>
//   );
// }











import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Content Generator',
  description: 'An AI tool to generate content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 👇 ClerkProvider should wrap only the app content, not <html>/<body> */}
        <ClerkProvider>
          <header>
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </header>

          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  )
}
