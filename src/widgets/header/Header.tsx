import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageswitcher/LanguageSwitcher";
import { NavList } from "../nav-list/NavList";
import s from "./ui/header.module.scss";
import logo from "/logo.png";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header className={s.header}>
      <div className={`container ${s.wrapper}`}>
        <div>
          <img className={s.logo} src={logo} alt={t("header.logo")} />
        </div>
        <NavList />
        <LanguageSwitcher />
        <div className={s.user}>
          <div className={s.info_user}>
            <p className={s.username}>{t("header.username")}</p>
            <p className={s.email}>{t("header.email")}</p>
          </div>
          <div className="avatar">avatar</div>
        </div>
      </div>
    </motion.header>
  );
};
