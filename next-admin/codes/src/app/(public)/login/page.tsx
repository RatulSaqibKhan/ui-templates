import LoginForm from "@/pages/LoginForm";
import { Suspense } from "react";

export default function Login() {
  return (
    <Suspense>
      <LoginForm></LoginForm>
    </Suspense>
  );
}
