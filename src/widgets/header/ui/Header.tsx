import { LanguageSwitcher } from "@/widgets/languageswitcher";
import { NavList } from "@/widgets/nav-list/";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import s from "./header.module.scss";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header className={s.header}>
      <div className={`container ${s.wrapper}`}>
        <div>
          <img
            className={s.logo}
            src={"/logo.png"}
            alt={t("header.logo")}
            loading="lazy"
          />
        </div>
        <NavList />

        <LanguageSwitcher />

        <div className={s.user}>
          <Link to={"/profile"}>Профиль</Link>
        </div>
      </div>
    </motion.header>
  );
};
