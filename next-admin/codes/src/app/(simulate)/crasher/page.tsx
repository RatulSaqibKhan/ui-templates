"use client";
import { useEffect } from "react";

export default function Crasher() {
  useEffect(() => {
    throw new Error("This is a client-side error");
  }, []);

  return <div>Crash test</div>;
}