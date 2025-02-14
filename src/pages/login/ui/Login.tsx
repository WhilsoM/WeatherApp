import { LoginForm } from "@/widgets/login-form/";
import { observer } from "mobx-react-lite";
import { Link } from "react-router";

export const Login = observer(() => {
  return (
    <>
      <Link to={"/register"}>зарегистрироваться</Link>
      <LoginForm />
    </>
  );
});
