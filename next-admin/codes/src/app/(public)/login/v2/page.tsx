import LoginForm from "@/pages/forms/Login/V2";
import { Suspense } from "react";

export default function Login() {
  return (
    <Suspense>
      <LoginForm></LoginForm>
    </Suspense>
  );
}
