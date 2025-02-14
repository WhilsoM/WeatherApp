import { RegisterForm } from "@/widgets/register-form/";
import { observer } from "mobx-react-lite";
import { Link } from "react-router";

export const Registration = observer(() => {
  return (
    <>
      <h1>Регистрация</h1>
      <Link to={"/login"}>Есть аккаунт?</Link>
      <RegisterForm />
    </>
  );
});
