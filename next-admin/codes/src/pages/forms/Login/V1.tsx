"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Version1 = () => {
   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    const success = login(email, password);
    if (success) {
      toast.success("Successfully logged in!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`Login with ${provider} clicked`);
    // Add social login logic
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/images/logo.svg" alt="Logo" width={200} height={100} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-dark mb-6">
          Sign in to your account
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-dark mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-dark mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-primary text-white py-2 rounded hover:bg-dark transition-colors"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <button
          className="w-full border border-gray-300 py-2 rounded mb-3 flex items-center justify-center gap-2 hover:bg-gray-50"
          onClick={() => handleSocialLogin("Google")}
        >
          <Image src="/images/google.svg" alt="Google" width={20} height={20} />
          Continue with Google
        </button>

        <button
          className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50"
          onClick={() => handleSocialLogin("Facebook")}
        >
          <Image
            src="/images/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
          Continue with Facebook
        </button>
      </div>
    </main>
  );
}

export default Version1;
