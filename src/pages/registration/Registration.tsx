import { RegisterForm } from "@/widgets/register-form/RegisterForm";
import { Link } from "react-router";

export const Registration = () => {
  return (
    <>
      <Link to={"/login"}>Есть аккаунт?</Link>
      <RegisterForm />
    </>
  );
};
