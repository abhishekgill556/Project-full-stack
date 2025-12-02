import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return <SignUp path="/register" routing="path" />;
}
