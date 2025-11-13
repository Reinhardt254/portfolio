"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";
import Button from "@/components/button";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        toast.error(error.message || "Failed to sign up");
        setLoading(false);
        return;
      }

      toast.success("Successfully signed up!");

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
    <div className="h-full flex justify-center items-center pt-10 bg-slate-950 min-h-screen">
      <Toaster />
      <div className="w-full max-w-md px-6 mb-20">
        <div className="bg-slate-900 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-300 mb-6 text-center">
            Sign Up
          </h1>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

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
                minLength={8}
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password (min 8 characters)"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 disabled:bg-gray-500 py-3 px-5 rounded text-gray-300 font-semibold hover:bg-blue-600 transition-colors"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-blue-400 hover:text-blue-300"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* <div className="mt-6">
              <Button link="/" text="Go back home" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
