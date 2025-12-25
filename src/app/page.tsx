"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center h-screen relative">
      <header className="absolute top-0 left-0 w-full flex items-center justify-between">
        <Link href="/" className="p-5">LOGO</Link>
        <div className="flex gap-4 px-5">
          <button
            onClick={() => router.push("/sign-up")}
            className="bg-black text-white font-medium px-6 py-1 rounded-md hover:bg-black/80 hover:scale-95 transition-all duration-200 ease-in-out">
            Sign Up
          </button>
          <button
            onClick={() => router.push("/sign-in")}
            className="border border-black text-black font-medium px-6 py-1 rounded-md hover:bg-black/10 hover:scale-95 transition-all duration-200 ease-in-out">
            Login
          </button>
        </div>
      </header>

      <div>
        <h1 className="text-7xl font-semibold">Ready to use auth</h1>
      </div>
    </main>
  );
}