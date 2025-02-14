import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import s from "./nav-list.module.scss";

export const NavList = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <motion.ul
        transition={{ delay: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={s.nav_list}
      >
        <li>
          <NavLink to={"/"} className={s.nav_list__link}>
            {t("nav.home")}
          </NavLink>
        </li>
        <li>
          <NavLink to={"about-us"} className={s.nav_list__link}>
            {t("nav.about")}
          </NavLink>
        </li>
        <li>
          <NavLink to={"memes"} className={s.nav_list__link}>
            {t("nav.memes")}
          </NavLink>
        </li>
      </motion.ul>
    </nav>
  );
};
