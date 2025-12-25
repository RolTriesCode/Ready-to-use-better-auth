"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    useEffect(() => {
        if (!isPending && !session?.user) {
            router.push("/sign-in");
        }
    }, [isPending, session, router]);

    if (isPending)
        return <p className="text-center mt-8 text-white">Loading...</p>;
    if (!session?.user)
        return <p className="text-center mt-8 text-white">Redirecting...</p>;

    const { user } = session;

    return (
        <main className="relative max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 ">
            <header className="absolute top-0 w-screen flex items-center justify-between">
                <Link href="/" className="p-5">LOGO</Link>
            </header>

            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Welcome, {user.name || "User"}!</p>
            <p>Email: {user.email}</p>
            <button
                onClick={() => signOut()}
                className="w-full bg-black text-white font-medium rounded-md px-4 py-2 hover:bg-black/80 hover:scale-95 cursor-pointer duration-200 ease-in-out transition-all"
            >
                Sign Out
            </button>
        </main>
    );
}