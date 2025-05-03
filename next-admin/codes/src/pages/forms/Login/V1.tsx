"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { login } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import FormInput from "@/componenets/ui/form-elements/FormInput";
import Button from "@/componenets/ui/buinding-blocks/Button";

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
        <FormInput
          inputFieldId="email"
          label="Email"
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <FormInput
          inputFieldId="password"
          label="Password"
          type="password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
        />

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
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <Button
          onClick={() => handleSocialLogin("Google")}
          className="w-full mb-3 custom-social-media-button"
        >
          <FaGoogle className="text-red-500" />
          Continue with Google
        </Button>

        <Button
          onClick={() => handleSocialLogin("Facebook")}
          className="w-full mb-3 custom-social-media-button"
        >
          <FaFacebookF className="text-blue-500" />
          Continue with Facebook
        </Button>

        {/* Sign-up prompt */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-primary font-medium hover:underline transition"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Version1;
