import { FC } from "react";
import { ISideBar } from "../model";
import s from "./sidebar.module.scss";

export const SideBar: FC<ISideBar> = ({ children }) => {
  return (
    <aside className={s.sidebar}>
      <section className={s["sidebar-wrapper"]}>{children}</section>
    </aside>
  );
};
