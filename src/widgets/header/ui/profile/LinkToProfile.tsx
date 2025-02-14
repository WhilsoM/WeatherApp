import { Link } from "react-router";
import s from "./linktoprofile.module.scss";

export const LinkToProfile = () => {
  return (
    <div className={s.user}>
      <Link to={"/profile"}>Профиль</Link>
    </div>
  );
};
