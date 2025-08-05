import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-700 via-emerald-700 to-green-600 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 flex-wrap">
          {/* Logo / Title */}
          <div className="flex-shrink-0 text-xl font-semibold">
            <Link href="/">Next.js Auth App</Link>
          </div>

          {/* Buttons and Links */}
          <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0 flex-wrap">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 rounded-full bg-white text-teal-800 text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:text-teal-900">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 rounded-full bg-white text-teal-800 text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:text-teal-900">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              
              <SignOutButton>
                <button className="px-4 py-2 rounded-full bg-white text-teal-800 text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-green-100 hover:text-teal-900">
                  Sign Out
                </button>
              </SignOutButton>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
