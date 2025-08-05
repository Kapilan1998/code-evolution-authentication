"use client";

import { useUser } from "@clerk/nextjs";

export default function AdminAccessButton() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  // Check for admin role (assumes you're using publicMetadata or similar)
  const role = user.publicMetadata?.role;

  if (role !== "admin") return null;

  return (
    <a href="/admin" className="inline-block">
      <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 hover:text-amber-900 transition duration-300">
        Check eligible for admin access
      </button>
    </a>
  );
}
