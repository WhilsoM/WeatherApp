import { FC } from "react";
import { TSideBar } from "../model";
import s from "./sidebar.module.scss";

export const SideBar: FC<TSideBar> = ({ children }) => {
  return (
    <aside className={s.sidebar}>
      <section className={s["sidebar-wrapper"]}>{children}</section>
    </aside>
  );
};
