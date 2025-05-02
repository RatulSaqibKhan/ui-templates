"use client";

import Button from "@/componenets/ui/Button";
import Input from "@/componenets/ui/Input";
import { login } from "@/utils/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Version2 = () => {
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
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        {/* Logo */}
        <div className="mb-8">
          <Image src="/images/logo.svg" alt="Logo" width={300} height={100} />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-primary mb-6">
          Welcome Back
        </h1>

        {/* Email */}
        <Input
          label="Email Address"
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <Input
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
        <div className="my-6 text-center text-gray-500 text-sm">
          or continue with
        </div>

        {/* Social Media Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={() => handleSocialLogin("Google")}
            className="w-full mb-3 custom-social-media-button"
          >
            <FaGoogle className="text-red-500" />
            Google
          </Button>

          <Button
            onClick={() => handleSocialLogin("Facebook")}
            className="w-full mb-3 custom-social-media-button"
          >
            <FaFacebookF className="text-blue-500" />
            Facebook
          </Button>
        </div>
      </div>

      {/* Right Section (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/images/company_building.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Version2;
