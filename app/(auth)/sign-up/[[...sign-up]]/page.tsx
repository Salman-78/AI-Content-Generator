import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp/>
      {/* <SignUp forceRedirectUrl={"http://localhost:3000/dashboard"} fallbackRedirectUrl={"http://localhost:3000/dashboard"} /> */}
    </div>
  );
}
