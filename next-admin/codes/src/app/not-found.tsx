// src/app/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-white">
      <Image
        src="/images/404.svg" // Optional: replace with your own image
        alt="404 - Page Not Found"
        width={400}
        height={300}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you are looking for {`doesn\'t`} exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-white bg-primary px-6 py-2 rounded-md hover:bg-secondary transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
