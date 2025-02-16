import { motion } from "motion/react";
import { LanguageSwitcher } from "../languageswitcher/LanguageSwitcher";
import { NavList } from "../nav-list/NavList";
import { LinkToProfile } from "../profile/LinkToProfile";
import s from "./burgermenu.module.scss";

export const BurgerMenu = () => {
  return (
    <div className={s.menu}>
      <input
        type="checkbox"
        id="burger-checkbox"
        className={s["burger-checkbox"]}
      />
      <label htmlFor="burger-checkbox" className={s.burger}>
        <span className={s.line}></span>
        <span className={s.line}></span>
        <span className={s.line}></span>
      </label>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${s["menu-list"]}`}
      >
        <li className={s["menu-item"]}>
          <NavList />
        </li>
        <li className={s["menu-item"]}>
          <LanguageSwitcher />
        </li>
        <li className={s["menu-item"]}>
          <LinkToProfile />
        </li>
      </motion.ul>
    </div>
  );
};
