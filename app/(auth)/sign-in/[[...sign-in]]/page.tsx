"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";
import Button from "@/components/button";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Failed to sign in");
        setLoading(false);
        return;
      }

      toast.success("Successfully signed in!");

      // Check if user is admin and redirect accordingly
      const adminEmail = "reinhardtlagat@gmail.com";
      const userEmail = data?.user?.email || email;

      if (userEmail === adminEmail) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
      router.refresh();
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-full flex justify-center items-center pt-10 bg-slate-950 min-h-[80vh] max-sm:min-h-auto">
      <Toaster />
      <div className="w-full max-w-[400px] px-0 mb-20">
        <div className="bg-slate-800 rounded-lg p-8 box-border border border-slate-800">
          <h1 className="text-4xl font-bold text-blue-300 mb-6 text-center">
            Sign In
          </h1>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 disabled:bg-gray-500 py-3 px-5 rounded text-gray-300 font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link
                href="/sign-up"
                className="text-blue-400 hover:text-blue-300 cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* <div className="mt-6">
            <Button link="/" text="Go back home" />
          </div> */}
        </div>
      </div>
    </main>
  );
}
