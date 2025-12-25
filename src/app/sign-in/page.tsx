"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";

export default function SignInPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);

        const res = await signIn.email({
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        });

        if (res.error) {
            setError(res.error.message || "Something went wrong.");
        } else {
            router.push("/dashboard");
        }
    }

    return (
        <main className="relative max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 ">
            <header className="absolute top-0 w-screen flex items-center justify-between">
                <Link href="/" className="p-5">LOGO</Link>
            </header>


            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-md border-zinc-300">

                <div className="clas">
                    <h1 className="text-2xl font-semibold">Sign In</h1>
                    <p className="text-zinc-500 text-[14px] md:text-[15px]">Enter your details to sign in</p>
                </div>

                <label htmlFor="email" className="text-[14px] md:text-[15px] text-zinc-500">Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-[14px] md:text-[15px]"
                />
                <label htmlFor="password" className="text-[14px] md:text-[15px] text-zinc-500">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-[14px] md:text-[15px]"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white font-medium rounded-md px-4 py-2 hover:bg-black/80 hover:scale-95 cursor-pointer duration-200 ease-in-out transition-all"
                >
                    Sign In
                </button>

                <p className="text-[14px] md:text-[15px] text-zinc-500 w-full text-center">
                    Don't have an account? <Link href="/sign-up" className="text-black underline">Sign Up</Link>
                </p>
            </form>
        </main>
    );
}