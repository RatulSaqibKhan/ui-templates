"use client";

import Button from "@/componenets/ui/Button";
import Input from "@/componenets/ui/Input";
import { login } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      toast.success("Successfully logged in!");
      router.push("/dashboard");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-center text-dark">Login</h2>
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} className="w-full mt-4">
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
