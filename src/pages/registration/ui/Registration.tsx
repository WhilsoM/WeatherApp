import { RegisterForm } from "@/widgets/register-form/RegisterForm";
import { observer } from "mobx-react-lite";
import { Link } from "react-router";

export const Registration = observer(() => {
  return (
    <>
      <Link to={"/login"}>Есть аккаунт?</Link>
      <RegisterForm />
    </>
  );
});
