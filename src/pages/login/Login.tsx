import { LoginForm } from "@/widgets/login-form/LoginForm";
import { Link } from "react-router";

export const Login = () => {
  return (
    <>
      <Link to={"/register"}>зарегистрироваться</Link>
      <LoginForm />
    </>
  );
};
