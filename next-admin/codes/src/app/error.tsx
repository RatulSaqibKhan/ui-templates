// src/app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("500 Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white">
      <Image
        src="/images/500.svg" // Add your own or get one from unDraw/storyset
        alt="500 - Server Error"
        width={400}
        height={300}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-red-600 mb-4">500 - Server Error</h1>
      <p className="text-gray-600 mb-6">
        Something went wrong on our end. Please try again or go back home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="text-white bg-primary px-6 py-2 rounded-md hover:bg-secondary transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
