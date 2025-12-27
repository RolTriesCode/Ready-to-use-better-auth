"use client";

import { signUp, signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);

        const res = await signUp.email({
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        });

        if (res.error) {
            setError(res.error.message || "Something went wrong.");
        } else {
            router.push("/dashboard");
        }
    }

    const handleLoginWithGoogle = async () => {
        await signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
        })
    }

    return (
        <main className="relative max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 ">
            <header className="absolute top-0 w-screen flex items-center justify-between">
                <Link href="/" className="p-5">LOGO</Link>
            </header>


            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-md border-zinc-300">

                <div>
                    <h1 className="text-2xl font-semibold">Sign Up</h1>
                    <p className="text-zinc-500 text-[14px] md:text-[15px]">Enter your details to sign up</p>
                </div>

                <label htmlFor="name" className="text-[14px] md:text-[15px] text-zinc-700">Full Name</label>
                <input
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-[14px] md:text-[15px]"
                />

                <label htmlFor="email" className="text-[14px] md:text-[15px] text-zinc-700">Email</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-[14px] md:text-[15px] "
                />

                <label htmlFor="password" className="text-[14px] md:text-[15px] text-zinc-700">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    minLength={8}
                    className="w-full rounded-md border border-zinc-300 px-3 py-2 text-[14px] md:text-[15px]"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white font-medium rounded-md px-4 py-2 hover:bg-black/80 hover:scale-95 cursor-pointer duration-200 ease-in-out transition-all"
                >
                    Create an account
                </button>

                <div className="flex items-center gap-2 py-2">
                    <div className="h-[1px] bg-zinc-300 grow" />
                    <span className="text-zinc-400 text-sm">OR</span>
                    <div className="h-[1px] bg-zinc-300 grow" />
                </div>

                <button
                    type="button"
                    onClick={handleLoginWithGoogle}
                    className="w-full border border-zinc-300 text-black font-medium rounded-md px-4 py-2 hover:bg-zinc-50 hover:scale-95 cursor-pointer duration-200 ease-in-out transition-all flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
                        <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path>
                        <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path>
                        <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path>
                        <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path>
                    </svg>
                    Sign up with Google
                </button>

                <p className="text-[14px] md:text-[15px] text-zinc-500 w-full text-center">
                    Already have an account? <Link href="/sign-in" className="text-black underline">Sign In</Link>
                </p>
            </form>
        </main>
    );
}